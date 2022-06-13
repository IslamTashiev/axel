import React from "react";
import { useDispatch } from "react-redux";
import menuIcon from "../../assets/menu.svg";
import searchIcon from "../../assets/search.svg";
import { handleChangeSearchModal } from "../../store/actions/actions";

export const Nav = () => {
  const dispatch = useDispatch();

  return (
    <div className='nav'>
      <div className='container'>
        <div className='nav__content'>
          <div className='nav__item'>
            <div className='catalog'>
              <div className='catalog__btn'>
                <img src={menuIcon} />
                <p>Catalog</p>
              </div>
              {/* <CatologDropdown /> */}
            </div>
          </div>
          <div className='nav__item'>
            <div
              onClick={() => dispatch(handleChangeSearchModal())}
              className='search'>
              <div className='search__btn'>
                <img src={searchIcon} />
                <p>Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
