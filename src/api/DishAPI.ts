import { Dish, DishResponse } from './dish';

class DishAPI {
    private static readonly baseURL: string = 'https://umzzcc503l.execute-api.us-west-2.amazonaws.com';

    public async createDish(dish: Dish): Promise<DishResponse> {
        const url = `${DishAPI.baseURL}/dishes/`;
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dish)
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json() as DishResponse;
        } catch (error) {
            throw error;
        }
    }
}

export default DishAPI;
