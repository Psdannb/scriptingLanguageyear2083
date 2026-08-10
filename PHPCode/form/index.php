<!-- <form method="get" action="data.php">
    <input type="text" placeholder="Enter your username" name="username">
    <input type="submit" />
</form> -->

<form method="POST" action="data.php">
    <input type="text" placeholder="Enter your username" name="username">
    <input type="email" placeholder="Enter your email" name="email">
    <input type="number" placeholder="Enter your phone number" name="phone">
    <input type="password" placeholder="Enter your password" name="password">
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    <select name="country">
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
        <option value="nepal">Nepal</option>
    </select>
    <input type="checkbox" name="admin[]" value="admin1"> Admin1
    <input type="checkbox" name="admin[]" value="admin2"> Admin2
    <textarea name="message" placeholder="Enter your message"></textarea>

    <input type="file" name="profile_picture" accept="image/*">
    <input type="submit" />
</form>