# OCaml-Visualizer

The OCaml visualizer is a program to help look at the CSE 130 dataset

## How to Install

###### 1. Install MongoDB

Instructions on how to download MongoDB are on this link:
https://docs.mongodb.com/manual/installation/

###### 2. Clone the repository

In a command line interface, type the following command:

`git clone https://github.com/kvlorenzo/OCaml-Visualizer.git`

Once completed, enter the new directory by typing:

`cd OCaml-Visualizer/`

###### 3. Install node modules

Once inside the 'OCaml-Visualizer' directory, enter the 'visualizer' folder by typing:

`cd visualizer/`

In this directory, run the following commands:

```
sudo npm install
sudo npm run client-install
```

## How to Configure

###### 1. Enter the 'OCaml-Visualizer' directory. 
If you are still in the 'visualizer' directory from the previous step, just type:

`cd ../`

Otherwise, try to change into the 'OCaml-Visualizer' directory from wherever
directory you are currently on.

###### 2. Update the database

Once in the 'OCaml-Visualizer' directory, execute the addData bash script by typing:

`./addData.sh`

If you do not have permission running the script, run the following chmod command:

`chmod 755 ./addData.sh`

Then try running the bash script again. This script will populate a MongoDB
database that will be used to access the data in the visualizer

## How to run

###### 1. Run the runProgram script

Stay in the 'OCaml-Visualizer' directory. From here, run the following command to
run the program:

`./runProgram.sh`

Once again, if you do not have permission, type the following chmod command:

`chmod 755 ./runProgram.sh`

Now the visualizer should be running! It may take some time to launch automatically,
but if nothing happens in the first five minutes. End the program by typing CTRL + C
and try again.

###### 2. Visit localhost:3000

In a browser, type in "localhost:3000" to find the visualizer program. If the program
runs correctly, this program step should be automatic. 

If the program is still not running, activate the backend endpoint by typing in your
browser:

`localhost:3002/users`

This port should hold the data from the database queries. This usually helps the front 
end program in port 3000 to run if it hasn't done so already.

If you are still having problems with the visualizer, contact Kyle Lorenzo at
kvlorenz@ucsd.edu for more help.


