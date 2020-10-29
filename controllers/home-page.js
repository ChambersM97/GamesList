// function for sending the logged in user to the home page
let handleHelloWorld = async (req, res) => {
    let user = JSON.parse(JSON.stringify(req.user))
    localStorage.setItem('user', user.user_name)
    console.log(user, "user object right before rendering to index of handlebars, home-pagejs")
    // not sure when we need to send more data to render on the home page what parameters handlebars is looking for
    return res.render("index", user);
};

module.exports = {
    handleHelloWorld: handleHelloWorld,
};