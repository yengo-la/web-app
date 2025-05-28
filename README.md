##Technology: HTML, CSS, JS, Node.js, Express.js, React+Vite, MySQL

## IMPORTANT
This is done with the free service of (3-hour Forecast 5 days), not the paid service.

I could not fulfil the requirements(16 day plan subscription) entirely so I added additional features to compensate.

The temp > 25 is added but because the temperature nowadays is not even close to 25 i just added a way to see more data.

If there really is a city with >25c it will appear in a yellow-ish style.

At the moment of typing this I am working on the search bar.

## Installation
1. Clone the repository:
```terminal
 git clone https://github.com/yengo-la/web-app.git
```

2.Dependencies if needed.

--frontend
```terminal
  npm i axios
```
--backend
```terminal
  npm i axios cors dotenv express mysql2 node-cron
```

## NEED TO DO
In the backend directory you must change the content of the .env file to your own credentials.
```.env
DB_HOST=your_host_name
DB_USER=your_user
DB_PASS=your_password
DB_NAME=database_name()

OPENWEATHER_API_KEY=your_api
```

For the OPENWEATHER_API_KEY copy paste your API key.

You need to create a account in https://openweathermap.org/

After that you must navigate to your Profile and click "API Keys".

It will not work if you have just created your account, you must wait 2 hours before you use it.

```MySQL
CREATE TABLE `weather_data` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`city` VARCHAR(50) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
	`date` DATE NOT NULL DEFAULT '0',
	`time` TIME NOT NULL DEFAULT '0',
	`humidity` DECIMAL(5,2) NOT NULL DEFAULT '0',
	`pressure` DECIMAL(6,2) NOT NULL DEFAULT '0',
	`wind_speed` DECIMAL(5,2) NOT NULL DEFAULT '0',
	`temperature` DECIMAL(5,2) NOT NULL DEFAULT '0',
	`weather_type` VARCHAR(50) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;
```


## Usage
Run two terminals for each command.
To run the project, use the following command:
--frontend 
```terminal
npm run dev
```
--backend
```terminal
node server.js
```



## WEBSITES USED

   API
   
https://openweathermap.org/

   ICONS

https://www.flaticon.com/

   WALLPAPERS

https://www.freepik.com/free-photos-vectors/

