import React, { useState, useRef, useEffect, useCallback } from "react";
import cx from "classnames";

import OptionItem from "./Options";
import useLoadPagination from "../LoadPagination/useLoadPagination";
import LoadingSpinner from "../LoadingSpinner";

import "./index.scss";

import Input from "../Input";

interface DropdownProp<T> {
  placeholder?: string;
  value: T | undefined;
  onChange: (newValue: T) => void;
  request: (count: number, offset: number, query: string) => Promise<T[]>;
}

type Item = {
  id: number;
  name?: string;
  universitiesCount?: number | string;
  studentsCount?: number | string;
  code?: string;
  title?: string;
};

export default function DropDown<T extends Item>(props: DropdownProp<T>) {
  const { value, onChange, request, placeholder } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const dropdownDiv = useRef<HTMLDivElement>(null);
  const uniqueId = Math.round(Math.random() * 1000).toString();

  useEffect(() => {
    window.addEventListener("click", onGlobalClick);
    return () => {
      window.removeEventListener("click", onGlobalClick);
    };
  });

  const { loading, error, hasMore, items, dispatch } = useLoadPagination(
      useCallback((count, offset) => request?.(count, offset, query), [
        request,
        query,
      ])
  );

  function onGlobalClick(e: MouseEvent) {
    if (!isOpen || e.target === null) return;
    let element = e.target;
    while (element !== null) {
      //@ts-ignore
      element = element.parentElement;
      //@ts-ignore
      if (element?.className === "dropdown" && element?.id === uniqueId) return;
      if (element === null) {
        setIsOpen(!isOpen);
      }
    }

    console.dir(e.target);
  }

  function onScroll() {
    if (dropdownDiv.current) {
      const { scrollTop, scrollHeight, clientHeight } = dropdownDiv.current;
      if (scrollHeight - scrollTop === clientHeight) {
        dispatch();
      }
    }
  }

  const dropdownItems = items.map((item: T) => {
    return (
      <OptionItem
        key={item.id}
        {...item}
        onClickedItemValue={(title: string) => {
          onChange(item);
        }}
      />
    );
  });

  return (
    <div className="dropdown" id={uniqueId}>
      <div className="input-container">
        <Input
          value={isOpen ? query : value?.name ? value?.name: value?.title}
          error={false}
          placeholder={placeholder}
          active={isOpen}
          onFocusHandler={(focusStatus: boolean) => {
            setIsOpen(focusStatus);
          }}
          onChangeHandler={(changedVal: string) => {
            setQuery(changedVal);
          }}
        />
        <div
          className={cx("arrow", { "arrow-rotate": isOpen })}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <div
        className={cx("option-list", {
          "list-active": isOpen,
          "list-inactive": !isOpen,
        })}
        ref={dropdownDiv}
        onScroll={onScroll}
      >
        {dropdownItems}
        {loading && <LoadingSpinner center-x />}
      </div>
    </div>
  );
}
