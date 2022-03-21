import { useEffect, useState } from "react";

import { Filter, Products, Search } from "./../../components";
import jsonProducts from "./../../json/fe.product-list.json";
import { FilteredBar, Loading } from "./ProductList.styled";
import { useFetch } from "./../../hooks/useFetch";

const ProductList = () => {
  const [products, setProducts] = useState(jsonProducts);

  const { data, status } = useFetch("https://api.myjson.com/bins/en2ik");

  const handleSearchProducts = (searchValue) => {
    const filtered = products.filter((entry) =>
      Object.values(entry).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchValue.toLowerCase())
      )
    );

    setProducts(filtered);

    if (searchValue === "") {
      setProducts(jsonProducts);
    }
  };

  const handleSortedValue = (filterValue) => {
    if (filterValue !== "All") {
      const sorted = products.sort((a, b) =>
        a[filterValue] > b[filterValue] ? 1 : -1
      );

      setProducts([...sorted]);
    } else {
      setProducts(jsonProducts);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      setProducts(data);
    } else {
      setProducts(jsonProducts);
    }
  }, [data]);

  return (
    <>
      <FilteredBar>
        <Search handleSearchProducts={handleSearchProducts} />
        <Filter handleFilterValue={handleSortedValue} />
      </FilteredBar>

      {status === "idle" ? (
        <Loading>Loading...</Loading>
      ) : (
        <Products productList={products} />
      )}
    </>
  );
};

export default ProductList;
