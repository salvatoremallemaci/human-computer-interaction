# Monument Viewer
High-fidelity prototype for the final project of the Human Computer Interaction course at Politecnico di Torino

## Team: Internet Explorers
- Vittorio Magelli s303447
- Alessio Mason s306017
- Gabriele Castelli s302055
- Salvatore Mallemaci s303357

## Technology
- Language: Javascript
- Frontend: React.js

## Explanation
The application simulates monument recognition. In particular, when we insert a monument, a scanning operation takes place automatically. This is simulated using a timeout, the termination of which simulates the inability to find the monument in the database. If before the termination of the timeout, the user clicks on one of the writings in the loading screen, then the timeout is reset and blocked, and the user returned to the page with the monument loaded.  

The application simulates positioning of the recostruction upon the real monument in such a way, that it is who is proving the application that must find the right position and angle of the camera to have the sensation that the application work properly. Instead, the recostruction is fixed in the center of the camera.  

The application functionalities are limited to a fixing point of observation. The final application should be able to permit the user to walk around the monument and show all the possible perspective of the recostruction.  

Once the monument is recognized, the prototype shows the fixed reconstruction with a tutorial. The tutorial shows the user how to iteract with the protoype.
Below the reconstruction there is a timeline that permits the user to navigate through the time, providing for each year a specific description.  

The user can retrieve the information for the selected year with the button in the lower. In the description is possible to suggest an edit with the button in the left-up corner. This feature can be also performed accessing the menu, using the "Suggest an edit" button.  

Once the user clicks on that button, the user access to a form for the monument recognized. Through a modal is possible to see the text, that you want to modify, in the case year!=ALL and topic==MonumentInfo. Now, the user can send his suggest using "Send" button, or go back using "Cancel" button( going back to the Monument recognized); The user can suggest an edit only for the monument that the user is framing.  

In the menu, the user can repeat the tutorial as many times as he wants.  

The user can click on the title of the monument to simulate the action of the user of diverting the camera to go to the initial page

