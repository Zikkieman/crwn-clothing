import { useContext, Fragment } from 'react';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';

// import { CategoriesContext } from '../../contexts/categories.context';
// import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
const CategoriesMap = useSelector(selectCategoriesMap)
  return (
    <Fragment>
      {Object.keys(CategoriesMap).map((title) => {
        const products = CategoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
