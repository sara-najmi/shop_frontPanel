import Link from "next/link";
import Layout from "../components/layout/Layout";


function Login() {

    const handleSubmit = event =>   {
        event.preventDefault();
        const response = fetch("http://localhost:8080/api/oauth/v1/authenticate", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                "email": event.target.email.value,
                "password": event.target.password.value,
            }), // body data type must match "Content-Type" header
          }).then(response => response.json())
          .then(result => {
            localStorage.setItem('token', JSON.stringify(result));
            window.location.href='/'
          });
    };


    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Login & Register" noBreadcrumb={"hidden"}>
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                                <div className="row">
                                    <div className="col-lg-6 pr-30 d-none d-lg-block">
                                        <img className="border-radius-15" src="assets/imgs/page/login-1.png" alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-8">
                                        <div className="login_wrap widget-taber-content background-white">
                                            <div className="padding_eight_all bg-white">
                                                <div className="heading_s1">
                                                    <h1 className="mb-5">ورود</h1>
                                                    <p className="mb-30">اکانت ندارید؟ <Link href="/page-register"><a>ثبت نام</a></Link></p>
                                                </div>
                                                <form onSubmit={(event)=>handleSubmit(event)}>
                                                    <div className="form-group">
                                                        <input type="text" required="" name="email" placeholder="کد ملی" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input required="" type="password" name="password" placeholder="گذر واژه" />
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-heading btn-block hover-up" name="login">ورود</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Login;
