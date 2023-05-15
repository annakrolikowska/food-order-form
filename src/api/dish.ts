export type BaseDish = {
    name: string;
    preparation_time: string;
    type: string;
}

export type Pizza = BaseDish & {
    type: 'pizza';
    no_of_slices: number;
    diameter: number;
}

export type Soup = BaseDish & {
    type: 'soup';
    spiciness_scale: number;
}

export type Sandwich = BaseDish & {
    type: 'sandwich';
    slices_of_bread: number;
}

export type Dish = Pizza | Soup | Sandwich;

export type DishResponse = Dish & {
    id: number;
}

export const generateDish = (values: any): Dish | undefined => {
    let dish: Dish | undefined;

    switch (values.dish_type) {
        case 'pizza':
            dish = {
                name: values.dish_name,
                preparation_time: values.preparation_time,
                type: 'pizza',
                no_of_slices: values.no_of_slices,
                diameter: values.diameter
            };
            break;
        case 'soup':
            dish = {
                name: values.dish_name,
                preparation_time: values.preparation_time,
                type: 'soup',
                spiciness_scale: values.spiciness
            };
            break;
        case 'sandwich':
            dish = {
                name: values.dish_name,
                preparation_time: values.preparation_time,
                type: 'sandwich',
                slices_of_bread: values.slices_of_bread
            };
            break;
        default:
            break;
    }

    return dish;
};
