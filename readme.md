# TPA-05
## Inisiasi
```bash
npx sequelize-cli init // inisiasi sequelize
npm install sequelize // install sequelize
npm install mysql2 // untuk menginstall mysql
```

## Membuat Database
```bash
npx sequelize-cli db:create // membuat database
```

## Membuat Model
```bash
npx sequelize-cli model:generate --name Users --attributes id:int, role_id:int, name:string, email:string, password:string

npx sequelize-cli model:generate --name Roles --attributes id:int, name:string

npx sequelize-cli model:generate --name Todos --attributes id:int, user_id:int, title:string, description:string, created_at:date
```

## Membuat Migration
```bash
npx sequelize-cli db:migrate // membuat migration
```

## Membuat Seeder
```bash
npx sequelize-cli seed:generate --name demo-user // membuat seeder

npx sequelize-cli seed:generate --name demo-role // membuat seeder

npx sequelize-cli seed:generate --name demo-todo // membuat seeder
```

## Endpoint
```bash
 Users
1.Register user
/users/register

2.Login user
/users/login

3.get id user
/users/:id

 Todos
1. Menampilkan seluruh Todos
/todos
2. Menampilkan Todos berdasarkan id
/todos/:Id
3. Menambahkan Todos
/todos
4. Mengubah Todos
/todos/:Id
5. Menghapus Todos sesuai Id
/todos/:Id
6. Menghapus semua Todos
/todos
```


