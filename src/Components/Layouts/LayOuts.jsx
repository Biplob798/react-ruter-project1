import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";


const LayOuts = () => {

    const navigation = useNavigation();
    // console.log(navigation.state === 'loading');

    const isLoadingData = navigation.state === 'Loading'

    console.log(isLoadingData);

    return (
        <div>
            <section className="flex justify-between items-center px-10 shadow-lg py-7">
                <div>
                    <h1 className="text-2xl font-bold">Amah Jon</h1>
                </div>
                <nav>
                    <ul className="flex gap-8">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active underline bg-green-500" : ""
                            }
                        >
                            products
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active underline" : ""
                            }
                        >
                            Dashboard
                        </NavLink>
                    </ul>
                </nav>
            </section>

            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default LayOuts;