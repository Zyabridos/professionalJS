// Напишите тесты для корзины интернет-магазина. Интерфейс:

// makeCart() – создаёт новую пустую корзину.
// addItem(products, count) – добавляет в корзину товары и их количество.
// Товар – это объект с двумя свойствами: name (имя) и price (стоимость).
// getItems() – возвращает список товаров в формате [{ product, count }, { product, count }, ...]
// getCost() – возвращает стоимость корзины.
// Стоимость корзины высчитывается как сумма всех добавленных товаров с учётом их количества.
// getCount() – возвращает количество товаров в корзине.

// const cart = makeCart();
// cart.addItem({ name: 'car', price: 3 }, 5);
// cart.addItem({ name: 'house', price: 10 }, 2);
// cart.getItems().length; // 2
// cart.getCost(); // 35
// cart.getCount(); // 7
// cart.addItem({ name: 'house', price: 10 }, 1);
// cart.getItems().length; // 3
// cart.getCost(); // 45

test('Cart', () => {
  const cart = makeCart();
  expect(cart.getItems()).toHaveLength(0);

  const car = { name: 'car', price: 3 };
  cart.addItem(car, 5);
  expect(cart.getItems()).toEqual(expect.arrayContaining([{ product: car, count: 5 }]));
  expect(cart.getCost()).toBe(15);
  expect(cart.getCount()).toBe(5);

  const house = { name: 'house', price: 10 };
  cart.addItem(house, 2);
  expect(cart.getItems()).toEqual(
    expect.arrayContaining(
      [{ product: car, count: 5 }, { product: house, count: 2 }],
    ),
  );
  expect(cart.getCost()).toBe(35);
  expect(cart.getCount()).toBe(7);
});

// NODE_OPTIONS=--experimental-vm-modules npx jest
