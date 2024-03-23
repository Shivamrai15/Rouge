
## **Rouge | Online Shopping for Women, Men Fashion & Lifestyle** 

Rouge is an online shopping website built with ReactJS and NextJS. It uses the Shadcn UI Library and Tailwind CSS for styling, while Stripe handles payment functions. Prisma ORM is employed to interact with the MongoDB Atlas database. NextAuth manages user authentication, allowing users to log in, register, and reset passwords. The system also sends confirmation emails to users.


After signing in, users have the ability to create wishlists and add products to them. Additionally, they can easily transfer items from the wishlist directly to the shopping cart. Users also have the option to update the quantity of products in their cart on the dedicated cart page.


## **Database Schema**

![prismaliser (1)](https://github.com/Shivamrai15/Rouge/assets/111892135/1ad76d96-440f-4137-9bee-6d58f6e1deab)


## **Web Preview**

![Screenshot 2024-02-11 004446](https://github.com/Shivamrai15/Ecommerce-Admin/assets/111892135/7a52fd3a-8ac5-4755-b924-2e4fd12978fa)

![Screenshot 2024-02-11 004559](https://github.com/Shivamrai15/Ecommerce-Admin/assets/111892135/a44b7c6a-5962-40a8-821a-ad3a1e23abbe)

![Screenshot 2024-02-11 004708](https://github.com/Shivamrai15/Ecommerce-Admin/assets/111892135/bd10d3b9-2e0d-4aa7-9369-1281efafae9c)

![Screenshot 2024-02-11 004739](https://github.com/Shivamrai15/Ecommerce-Admin/assets/111892135/023cae8e-d8b5-4707-be4b-d68a759740fd)

![Screenshot 2024-02-11 004843](https://github.com/Shivamrai15/Ecommerce-Admin/assets/111892135/62f0bdb0-1ee7-4a90-bb5c-7d42910df33b)

![Screenshot 2024-02-11 004911](https://github.com/Shivamrai15/Ecommerce-Admin/assets/111892135/809eb44a-5b20-4846-8862-90c3be93bb25)

![Screenshot 2024-02-11 004959](https://github.com/Shivamrai15/Ecommerce-Admin/assets/111892135/acb19c73-cb76-4c13-8561-94270a8ed303)

![Screenshot 2024-02-11 005132](https://github.com/Shivamrai15/Ecommerce-Admin/assets/111892135/07a880a4-f354-4d6e-85de-f8fc651fbbfa)


## **API Reference**

#### Get all categories

```http
  GET https://ecommerce-admin-nu.vercel.app/api/${storeId}/categories
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `storeId` | `string` | **Required**. Your store key |

#### Get category

```http
  GET https://ecommerce-admin-nu.vercel.app/api/${storeId}/categories/${categoryId}
```

| Parameter    | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `storeId`    | `string` | **Required**. Your store key      |
| `categoryId` | `string` | **Required**. Id of category to fetch |


#### Get all products

```http
  GET https://ecommerce-admin-nu.vercel.app/api/${storeId}/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `storeId` | `string` | **Required**. Your store key |

#### Get product

```http
  GET https://ecommerce-admin-nu.vercel.app/api/${storeId}/products/${productId}
```

| Parameter    | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `storeId`    | `string` | **Required**. Your store key      |
| `productId`  | `string` | **Required**. Id of item to fetch |


#### Get all sizes

```http
  GET https://ecommerce-admin-nu.vercel.app/api/${storeId}/sizes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `storeId` | `string` | **Required**. Your store key |

#### Get size

```http
  GET https://ecommerce-admin-nu.vercel.app/api/${storeId}/sizes/${sizeId}
```

| Parameter    | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `storeId`    | `string` | **Required**. Your store key      |
| `sizeId`  | `string` | **Required**. Id of size to fetch    |



#### Get all colors

```http
  GET https://ecommerce-admin-nu.vercel.app/api/${storeId}/colors
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `storeId` | `string` | **Required**. Your store key |

#### Get color

```http
  GET https://ecommerce-admin-nu.vercel.app/api/${storeId}/colors/${colorId}
```

| Parameter    | Type     | Description                       |
| :----------- | :------- | :-------------------------------- |
| `storeId`    | `string` | **Required**. Your store key      |
| `sizeId`  | `string` | **Required**. Id of color to fetch   |



