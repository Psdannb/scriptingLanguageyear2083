<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to Server-Side Scripting</title>
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.7;
        color: #333;
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        padding: 40px 20px;
        max-width: 900px;
        margin: 0 auto;
    }

    h1 {
        color: #1e3a8a;
        font-size: 2.8rem;
        margin-bottom: 20px;
        text-align: center;
        border-bottom: 4px solid #3b82f6;
        padding-bottom: 15px;
    }

    h2 {
        color: #1e40af;
        font-size: 1.8rem;
        margin: 35px 0 15px;
        border-left: 6px solid #3b82f6;
        padding-left: 15px;
    }

    p {
        margin-bottom: 18px;
        font-size: 1.1rem;
    }

    ul,
    ol {
        background: #f1f5f9;
        padding: 20px 30px;
        border-radius: 10px;
        margin: 20px 0;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    }

    ul li,
    ol li {
        margin-bottom: 12px;
        font-size: 1.08rem;
    }

    ul li:last-child,
    ol li:last-child {
        margin-bottom: 0;
    }

    /* Funny intro paragraph styling */
    .funny-intro {
        background: #fef3c7;
        border-left: 8px solid #f59e0b;
        padding: 20px;
        font-style: italic;
        font-size: 1.15rem;
        color: #92400e;
        border-radius: 8px;
        margin: 25px 0;
    }

    .container {
        background: white;
        padding: 40px;
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
    </style>
</head>

<body>
    <div class="container">
        <h1>Introduction to Server-Side Scripting Language</h1>

        <p>A Server-Side Scripting Language is a programming language used to create dynamic web pages by executing
            scripts on the web server before the web page is sent to the client's browser. Unlike client-side scripting,
            where code runs in the user's browser, server-side scripts run on the server and generate the HTML that is
            delivered to the client.</p>

        <p>Server-side scripting enables websites to process user requests, interact with databases, manage user
            sessions, authenticate users, and generate dynamic content based on user input or stored data.</p>

        <p>Some popular server-side scripting languages include PHP, Python, Java, C#, Ruby, JavaScript (Node.js), and
            Perl.</p>

        <h2>Need for Server-Side Scripting</h2>
        <p>Static web pages display the same content to every visitor. However, modern web applications require
            personalized and dynamic content, which cannot be achieved using HTML and CSS alone.</p>

        <p>Server-side scripting is used to:</p>
        <ul>
            <li>Generate dynamic web pages.</li>
            <li>Process user input from forms.</li>
            <li>Perform user authentication and authorization.</li>
            <li>Interact with databases.</li>
            <li>Manage user sessions and cookies.</li>
            <li>Perform file handling operations.</li>
            <li>Send emails and notifications.</li>
            <li>Execute business logic securely on the server.</li>
        </ul>

        <h2>How Server-Side Scripting Works?</h2>
        <p>The execution of server-side scripts follows these steps:</p>
        <ol>
            <li>The user sends a request to a web server through a web browser.</li>
            <li>The web server receives the request.</li>
            <li>The server executes the server-side script (e.g., PHP).</li>
            <li>The script processes the request and, if necessary, communicates with a database.</li>
            <li>The server generates an HTML response.</li>
            <li>The generated HTML is sent back to the client's browser.</li>
            <li>The browser displays the resulting web page to the user.</li>
        </ol>

        <h2>Advantages and Disadvantages of Server-Side Scripting</h2>
        <p class="funny-intro">Open your eyes, summon whatever common sense survived last night’s France vs Spain chaos,
            and let’s pretend we’re thinking like responsible adults.</p>
    </div>
</body>

</html>