import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import searchIcon from "../../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeSearchModal } from "../../store/actions/actions";

export const SearchModal = () => {
  const { searchModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <div className={`window search ${searchModal ? "active" : ""}`}>
      <div
        onClick={() => dispatch(handleChangeSearchModal())}
        className='modal__closer'></div>
      <div className='modal__window searchbar'>
        <form className='search__form'>
          <Input label='Search...' />
          <Button
            text='Search'
            defaultClassName='search__btn'
            withImage={true}
            imgSrc={searchIcon}
          />
        </form>
      </div>
    </div>
  );
};
