sequenceDiagram
    participant browser
    participant server
    participant user

    user--->browser:  Submit form data 
    Note right of browser: The browser executes JavaScript code to update the notes list within     the browser and send the new note to the server
    
    browser-->>browser: Add the new note to the notes list
    browser-->>browser: Redraw the notes list

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created
    deactivate server

    