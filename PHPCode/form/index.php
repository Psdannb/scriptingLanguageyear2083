<!-- <form method="get" action="data.php">
    <input type="text" placeholder="Enter your username" name="username">
    <input type="submit" />
</form> -->

<form method="POST" action="data.php">
    <input type="text" placeholder="Enter your username" name="username">
    <input type="email" placeholder="Enter your email" name="email">
    <input type="number" placeholder="Enter your phone number" name="phone">
    <input type="password" placeholder="Enter your password" name="password">
    <input type="radio" id="male" name="gender" value="male" checked>
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    <select name="country">
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
        <option value="nepal" selected>Nepal</option>
    </select>
    <input type="submit" />
</form>