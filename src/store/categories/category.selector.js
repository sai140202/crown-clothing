import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => { 
        console.log('categories: ', categoriesSlice.categories);
        return categoriesSlice.categories
    }
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => { 
        console.log('typeof categories: ', typeof(categories));
        return categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
    }
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);

// selectors perform transformation operation on
// basic data fetched from APIs.  