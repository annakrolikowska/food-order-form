import DishAPI from '../api/DishAPI';
import { Soup, Sandwich, Pizza } from '../api/dish';

describe('DishAPI', () => {
    let api: DishAPI;
    let fetchMock: jest.SpyInstance;

    beforeEach(() => {
        api = new DishAPI();
        fetchMock = jest.spyOn(global, 'fetch');
    });

    afterEach(() => {
        fetchMock.mockRestore();
    });

    it('should create a pizza', async () => {
        const newPizza: Pizza = {
            name: 'HexOcean pizza',
            preparation_time: '01:30:22',
            type: 'pizza',
            no_of_slices: 4,
            diameter: 33.4,
        };

        const response = {
            ...newPizza,
            id: 1
        };

        fetchMock.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(response),
        } as Response);

        const result = await api.createDish(newPizza);
        expect(result).toEqual(response);
    });

    it('should throw an error for failed request', async () => {
        const newSoup: Soup = {
            name: 'Hot soup',
            preparation_time: '00:30:00',
            type: 'soup',
            spiciness_scale: 5,
        };

        fetchMock.mockResolvedValueOnce({
            ok: false,
            status: 502
        } as Response);

        await expect(api.createDish(newSoup)).rejects.toThrow('HTTP error! status: 502');
    });
});
