


## Project 15 (4e)
### Student Personal/School Account Dashboards and Parental Controls
#### By: 
PM: Jean-Luc Choiseul
SM: Varun Singh
Ruhi Reddy, Julian Stennett, Ethan Trosper, Sam Dedio

## Branches

Our project features everal branches but for all testing and grading purposes, our MVP is found in the develop branch as it contains all working features and changes. The other branches are either already included in the develop branch or have experimental changes we decided against or were too buggy to merge into the MVP.

## Running the project:

Once cloned or downloaded, begin by starting docker on your local device. Ensure docker is up and running via the bottom left of the app looking something like this:
![image](https://github.com/4e-Software-Engineering/diamond-code-sparks/assets/100103684/bfeaefbc-2e6d-45e1-bde8-0e371e40064a)
Once your docker is good to go, create two terminal interfaces in your choice of CLI. In the first, run npm install on the diamond code sparks directory. Afterwards, enter the path directory diamond-code-sparks/client and then enter npm install again and then run yarn start. Once this process is complete and you get a messagew saying "VITE c4.5.0 ready in --- ms", use your second CLI to run docker compose up in the diamond code sparks directory. When this command is sucesffuly executed you should see an output listing project info in a table a message saying "To manage your project, go to the administration panel at:" The CLI instructions set up the frontend and backend respectively. A possible common errors is having the port 1337 already being used by another application so make sure to double check this if you get an error.

Once the setup is complete, enter localhost:3000 on a browser of your choice and you will be able to experiment with the project.

## Project Features implemented and associated screenshots

### Share Page and Functionality
![image](https://github.com/4e-Software-Engineering/diamond-code-sparks/assets/100103684/989b95e9-1a46-4f1e-8a17-6b586a3e7797)

### Sharing Confirmation
![image](https://github.com/4e-Software-Engineering/diamond-code-sparks/assets/100103684/c2235b3f-b88b-4e00-8cf6-08af888008da)

### Student Dashboard
![image](https://github.com/4e-Software-Engineering/diamond-code-sparks/assets/100103684/bd99ef21-b59b-4385-8d22-2dc6c3d14a45)

### My Programs
![image](https://github.com/4e-Software-Engineering/diamond-code-sparks/assets/100103684/dbc2fef8-623b-4e67-a770-619254478778)

### Secondary Password
![image](https://github.com/4e-Software-Engineering/diamond-code-sparks/assets/100103684/fd98416b-e975-44ba-82a5-fcc3f4ad8199)

### Daily Activities

![image](https://github.com/4e-Software-Engineering/diamond-code-sparks/assets/100103684/fa4861d4-b7f6-439a-9ff1-736f4951d24c)


## How to update database and server connections

To update the database you want to being by strating up the database using the previously described process. Afterwards go to localhost:1337/admin.
Once you are brought to the login page, use:
Strapi Admin:
superadmin@mail.com
TN9q6RZhDaw6

Now that you have admin access to the database, you can modify, create and delete fields for any collection. 
This is how the secondary password was created as we added a field to the student collection. Once you are done making any changes, make sure to save and ensure no errors prevent you from doing so.


To update the server connections you'll want to begin by opening up your ide and using the database.js. This file parses a PostgreSQL DB connection URL into the parts needed by Strapi which would allow modify, create and delete connections.

Both of these methods will directly update to your local directory meaning no extra steps will be needed to update them.

## Update the database and STRAPI dump files

We followed the instructions in scripts readme to update our dump files.

## Outstanding Work

- Implenting aesthetical features such as a hover and an appealing color pallette.
- Deduce another implementation of a secondary password that doesnt rely on teacher parent contact.

## Built Upon
This entire project is forked from the orgininal diamond-code-sparks meaning it is built upon it. No special libraries were used aside from the ones included.



