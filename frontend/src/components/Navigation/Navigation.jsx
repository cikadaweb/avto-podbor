import style from './Navigation.module.css';
import {Container} from "../Container/Container.jsx";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {categoryRequestAsync, changeCategory} from "../../store/category/categorySlice.js";
import {useEffect} from "react";
import {API_URI} from "../../const.js";

export const Navigation = () => {

    const {category, activeCategory} = useSelector((state) => state.category)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoryRequestAsync());
    }, []);

    return (
        <nav className={style.navigation}>
            <Container className={style.container}>
                <ul className={style.list}>
                    {category.map((item, idx) =>
                        <li key={item.title} className={style.item}>
                            <button
                                className={classNames(style.button,
                                    activeCategory === idx ? style.button_active : ''
                                )}
                                style={{backgroundImage: `url(${API_URI}/${item.image})`}}
                                onClick={() => {
                                    dispatch(changeCategory({
                                        indexCategory: idx
                                    }))
                                }}
                            >{item.rus}
                            </button>
                        </li>
                    )}
                </ul>
            </Container>
        </nav>
    );
};