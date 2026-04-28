import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from '../reducers/categoriesSlice';
import unitsReducer from '../reducers/units/unitsSlice';
import leaderReducer from '../reducers/leaders/leadersSlice';
import civilizationsReducer from '../reducers/civilizations/civilizationsSlice';
import civicsReducer from '../reducers/civics/civicsSlice';
import technologiesReducer from '../reducers/technologies/technologiesSlice';
import buildingsReducer from '../reducers/buildings/buildingsSlice';
import wondersReducer from '../reducers/wonders/wondersSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        units: unitsReducer,
        leaders: leaderReducer,
        civilizations: civilizationsReducer,
        civics: civicsReducer,
        technologies: technologiesReducer,
        buildings: buildingsReducer,
        wonders: wondersReducer
    }
});
