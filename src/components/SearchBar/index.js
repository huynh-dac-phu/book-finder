import React, { useState } from "react";
import {
  SearchBarWrapper,
  SearchForm,
  SearchInput
} from "components/SearchBar/styled";
import { useDispatch } from "react-redux";
import { doSeacrhBook } from "redux/actions/bookAction";
import Dropdown from "components/Dropdown";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [optionValue, setOptionValue] = useState("intitle");

  const dispatch = useDispatch();

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(doSeacrhBook(inputValue, optionValue));
  };

  const handleSelect = value => {
    setOptionValue(value);
  };

  return (
    <SearchBarWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          onChange={handleChange}
          value={inputValue}
          placeholder="Searching here"
        />
        <Dropdown handleSelect={handleSelect} />
      </SearchForm>
    </SearchBarWrapper>
  );
};

export default SearchBar;
