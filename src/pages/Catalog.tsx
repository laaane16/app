import React, { FC, useCallback, useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTypeFilter,
  setAvailableFilter,
  setSort,
  setFilter,
} from "../redux/slices/filter/slice";

import {
  selectFilterCategory,
  selectFilterSort,
} from "../redux/slices/filter/selectors";
import qs from "qs";

import { debounce } from "../utils/debounce";

import { useLocation, useNavigate } from "react-router-dom";
import { selectCardsStatus } from "../redux/slices/cards/selectors";
import { fetchCards } from "../redux/slices/cards/asyncActions";
import { selectCardsItems } from "../redux/slices/cards/selectors";
import { selectIsMounted } from "../redux/slices/app/selectors";
import { setIsMounted } from "../redux/slices/app/slice";
import { useAppDispatch } from "../redux/store";
import { Status } from "../types/types";
import { CardsCategories, MyInput, MySelect, CardList } from "../components";

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();

  const isMounted = useSelector(selectIsMounted);
  const category = useSelector(selectFilterCategory);
  const sortValue = useSelector(selectFilterSort);

  const cards = useSelector(selectCardsItems);
  const status = useSelector(selectCardsStatus);

  const searchRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");

  const searchDebounce = useCallback(debounce(setSearch, 400), []);

  const onSearchChange = () => {
    searchDebounce(searchRef.current?.value);
  };

  const onAvailableFilterClick = useCallback((i: boolean) => {
    dispatch(setAvailableFilter(i));
  }, []);

  const availableFilterCategories = useMemo(
    () => [
      { value: true, title: "В наличии" },
      { value: false, title: "Под заказ" },
    ],
    []
  );

  const onTypeFilterClick = useCallback((i: string) => {
    dispatch(setTypeFilter(i));
  }, []);

  const typeFilterCategories = useMemo(
    () => [
      { value: "all", title: "Все" },
      { value: "cross", title: "Кресты" },
      { value: "pendant", title: "Подвески" },
      { value: "bracelet", title: "Браслеты" },
      { value: "chain", title: "Шнуры и цепи" },
    ],
    []
  );

  const onSelectChange = useCallback((i: string) => {
    dispatch(setSort(i));
  }, []);

  const selectOptions = useMemo(
    () => [
      { value: "low", title: "По убыванию" },
      { value: "high", title: "По возрастанию" },
    ],
    []
  );

  useEffect(() => {
    dispatch(fetchCards());
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.search) {
      const params = location.search.slice(1);
      const parseParams = qs.parse(params);

      parseParams.available = /true/i.test(parseParams.available);

      dispatch(setFilter(parseParams));
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      const search = qs.stringify({
        type: category.type,
        available: category.available,
        sortValue,
      });

      navigate(`?${search}`);
    }
    dispatch(setIsMounted());
  }, [category, sortValue]);

  const sortedCards = useMemo(() => {
    console.log(sortValue, cards);
    if (sortValue !== "default") {
      if (sortValue === "high") {
        return [...cards].sort((a, b) => a.price - b.price);
      } else {
        return [...cards].sort((a, b) => b.price - a.price);
      }
    } else {
      return cards;
    }
  }, [cards, sortValue]);

  const getFilteredAndSortedCards = () => {
    if (category.type !== "all") {
      return [
        ...sortedCards.filter(
          (item) =>
            item.type === category.type && item.available === category.available
        ),
      ];
    } else {
      return [
        ...sortedCards.filter((item) => item.available === category.available),
      ];
    }
  };

  const sortedAndFilteredCards = getFilteredAndSortedCards();

  const getSearchedAndFilteredCards = () => {
    if (search.length != 0) {
      return sortedAndFilteredCards.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return sortedAndFilteredCards;
    }
  };

  const searchedAndFilteredCards = getSearchedAndFilteredCards();

  return (
    <main className="app-content">

      
      <div className="_container">
        <div
          style={{
            backgroundColor: "#F2F2F2",
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 25px",
          }}
          className="filters"
        >
          <div className="cards-categories">
            <CardsCategories
              value={category}
              filt="available"
              onClick={onAvailableFilterClick}
              categories={availableFilterCategories}
            />

            <CardsCategories
              value={category}
              filt="type"
              onClick={onTypeFilterClick}
              categories={typeFilterCategories}
            />
          </div>
          <MyInput
            placeholder="Поиск"
            clss="search"
            innerRef={searchRef}
            onChange={onSearchChange}
          />
          <MySelect
            value={sortValue}
            onChange={onSelectChange}
            defaultValue="По цене"
            options={selectOptions}
          />
        </div>
        {status === Status.ERROR ? (
          <h1 className="warning-message">Произошла ошибка, попробуйте зайти позднее</h1>
        ) : searchedAndFilteredCards.length === 0 && status === Status.SUCCESS
          ? <h1 className="warning-message">Товары не найдены</h1>
          : 
          <CardList status={status} cards={searchedAndFilteredCards} />
        }
        
      </div>
  
    </main>
  );

};

export default Catalog;
