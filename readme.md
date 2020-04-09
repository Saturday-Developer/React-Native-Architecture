This is the basic setup of react native application, that we need to follow before start any actual project.

In this i had used Redux for state management and saga for middleware that are using generator functions and very helpful for call and get response from api process.

For api calling i had created common function for both fetch and axios.

For languages support i had used i18n library.

Let's look on things step by step ==>

First step is create our folder sturcture =>
In main folder create a src folder which hold the whole source of project.
Remain App.js outside of src folder cuz it is entry point of our aaplication. As we know index is the entry point but inside index it is taking reference of App as React Element while registering the component.

Inside src there are following folders : -
    components => they hold all reusable code related to UI through out app. So that all UI components e.g button,text input,card,header etc, remain same through out application.
    In this app, as it is basic demo i had created only card

    container => they are controlled component that able to use react lifecycle in actual. They are responsible to contain the components inside them and call api & other functions.

    navigation => It holds all the files inside it and we use react navigation inside it.

    network => It responsible for two process, one for api call and 2nd for sagas.
    As saga will look on  config of api request and response and call the action accordingly e.g wether api is calling or we get success response or there is any error.
    There is two way to write checks for status code of response, 1st we can write in the network request where we get response initial and then write check accordingly.
    2nd we can return response direct from network request and handle action by response status inside sagas.
    I had done both of them in this app.

    redux => This holds whole application level states inside it. Inside it there is two folders, one for action and 2nd for reducers. Action will look up which type of action performed and inside reducer there is check for state when perform specific action.

    utility => As component looks on reusable code for UI. Similarly utility looks on resuable code for functions, resuable strings or constants through out app.
    e.g : colors,api status codes, styleHelper etc.

Now for mutiple languages support i am using react-native-i18n. 
I had created a folder locales that will hold configuration i18n and static strings/text of application as well.

Create you json file for different languages. I am using english and hindi language in this application.

Import your language files and pass their reference inside I18n.translation.

Change your app language to hindi or any language that you had configured for i18n and reload app. You will able to see desired output.

Note => Make sure in all language file use same key and change values according to different language.
As inside app we use values by the key.




    

