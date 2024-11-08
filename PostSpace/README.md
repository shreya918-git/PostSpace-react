Environment Variables-
as react is a frontend library,mostly variables are stored in javascript which can be accessed through our browser also.
some sensitive information that will be stored in database will be stored as system variables which are managed in secret managers of other environments.
these variables are always stored in the root of our project,(package.json,readme are the roots).
we never ship .env file to the github,create a sample file which will be pushed and will be accessed by us.
it is used to store variables which change according to the environments such as API keys,database connection variables,Urls
environments are testing,production,development.