const createPlaidLinkToken = async (req, res) => {
    // const { user_id } = req.session.user
    const user_id = 1

    console.log(req.clientTest)
    // const { link_token } = await req.client.createLinkToken({
    //     user: {
    //         client_user_id: toString(user_id)
    //     },
    //     client_name: "Our Budget",
    //     products: ["auth", "transactions"],
    //     country_codes: ["US"],
    //     language: "en"
    // }).catch(err => {res.sendStatus(500); console.log(err.message)})

    res.status(200).send("link_token")
}

export default createPlaidLinkToken