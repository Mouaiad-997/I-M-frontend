import React, { useEffect, useState } from "react";
import { Link, Route, BrowserRouter  as Router , useHistory } from "react-router-dom";
const Dashboard = () => {
  let admin = JSON.parse(localStorage.getItem('admin-info'));
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [numofcategories, setNumOfCategories] = useState([]);
  const [numofbookings, setNumOfBookings] = useState([]);
  const [numoffavourites, setNumOfFavourites] = useState([]);
  const history = useHistory();
  useEffect(async () => {
    getData();
    getNumOfCategories();
    getNumOfBookings();
    getNumOfFavourites();
  }, []);
 
  async function search(key) {
  let result=await fetch("http://127.0.0.1:8000/api/search/"+key)
  result=await result.json();
  console.warn(result)
  setData(result);
 }
  
  async function logout() {
   localStorage.clear();
    console.log(localStorage);
    history.push("/login-admin");
  }
  async function deleteCategory(id) {
    let result = await fetch(
      "http://127.0.0.1:8000/api/deleteCategories/" + id,
      {
        method: "DELETE",
      }
    );
    console.warn(result.data);
    getData();
    getNumOfCategories();
    getNumOfBookings();
    getNumOfFavourites();
  }
  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/api/categories");
    result = await result.json();
    setData(result);
    console.warn(result)
  }
  async function getNumOfCategories() {
    let result = await fetch("http://127.0.0.1:8000/api/numOf/Categories");
    result = await result.json();
    setNumOfCategories(result);
  }
  async function getNumOfBookings() {
    let result = await fetch("http://127.0.0.1:8000/api/numOf/Bookings");
    result = await result.json();
    setNumOfBookings(result);
  }
  async function getNumOfFavourites() {
    let result = await fetch("http://127.0.0.1:8000/api/numOf/Favourites");
    result = await result.json();
    setNumOfFavourites(result);
  }

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div className="app-header header-shadow">
          <div className="app-header__logo">
            <div className="logo-src" />
            <div className="header__pane ml-auto">
              <div>
                <button
                  type="button"
                  className="hamburger close-sidebar-btn hamburger--elastic"
                  data-class="closed-sidebar"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="app-header__mobile-menu">
            <div>
              <button
                type="button"
                className="hamburger hamburger--elastic mobile-toggle-nav"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
          <div className="app-header__menu">
            <span>
              <button
                type="button"
                className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
              >
                <span className="btn-icon-wrapper">
                  <i className="fa fa-ellipsis-v fa-w-6" />
                </span>
              </button>
            </span>
          </div>{" "}
          <div className="app-header__content">
            <div className="app-header-left">
              <div className="search-wrapper">
                <div className="input-holder">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Type to search"
                    onChange={(e)=>search(e.target.value)}
                  />
                  <button className="search-icon">
                    <span />
                  </button>
                </div>
                <button className="close" />
              </div>
              <ul className="header-menu nav">
                
                <li className="btn-group nav-item">
                <Link to="/add-admin" className="nav-link">
                    <i className="nav-link-icon fa fa-edit" />
                    Add Admin
                 </Link>
                </li>
                <li className="btn-group nav-item">
                <Link onClick={logout} className="nav-link">
                    <i className="nav-link-icon fa fa-edit" />
                   Logout
                 </Link>
                </li>
                
               
              </ul>{" "}
            </div>
            <div className="app-header-right">
              <div className="header-btn-lg pr-0">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    
                    <div className="widget-content-left  ml-3 header-user-info">
                      <div className="widget-heading">Wellcome Back {admin.user.name.toUpperCase()}</div>
                    </div>
                   
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>{" "}

        {" "}
        <div className="app-main">
          <div className="app-sidebar sidebar-shadow">
            <div className="app-header__logo">
              <div className="logo-src" />
              <div className="header__pane ml-auto">
                <div>
                  <button
                    type="button"
                    className="hamburger close-sidebar-btn hamburger--elastic"
                    data-class="closed-sidebar"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="app-header__mobile-menu">
              <div>
                <button
                  type="button"
                  className="hamburger hamburger--elastic mobile-toggle-nav"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
            <div className="app-header__menu">
              <span>
                <button
                  type="button"
                  className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                >
                  <span className="btn-icon-wrapper">
                    <i className="fa fa-ellipsis-v fa-w-6" />
                  </span>
                </button>
              </span>
            </div>{" "}
            <div className="scrollbar-sidebar">
              <div className="app-sidebar__inner">
                <ul className="vertical-nav-menu">
                  <li className="app-sidebar__heading">I&M Dashboard</li>
                  <li>
                    <Link to="/dashboard" className="mm-active">
                      <i className="metismenu-icon pe-7s-tools" />
                      I&M Controller
                    </Link>
                  </li>
                  <li>
                    <Link to="/add-category" className="mm-active">
                      <i className="metismenu-icon pe-7s-plus" />
                      Add Categorie
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>

          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="row">
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div className="widget-heading">Total Categories </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-success">
                            {numofcategories}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div className="widget-heading">Total Bookings</div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-warning">{numofbookings}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="card mb-3 widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div className="widget-heading">
                            Total Favourites
                          </div>
                        </div>
                        <div className="widget-content-right">
                          <div className="widget-numbers text-danger">
                          {numoffavourites}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="main-card mb-3 card">
                    <div className="card-header">
                      All Categories
                     
                    </div>
                    <div className="table-responsive">
                      <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                        <thead>
                          <tr>
                            <th className="text-center">Name</th>
                            <th className="text-center">Category</th>
                            <th className="text-center">Type of fashion</th>
                            <th className="text-center">Size</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Image</th>
                            <th className="text-center">Update</th>
                            <th className="text-center">Delete</th>
                           
                          </tr>
                        </thead>

                        <tbody>
                          {data.map((item, index) => (
                            <tr key={index}>
                              <td className="text-center text-muted">
                                {item.name}
                              </td>
                              <td>
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3"></div>
                                    <div className="widget-content-left flex2">
                                      <div className="widget-heading">
                                        {item.category}
                                      </div>
                                      {/* <div className="widget-subheading opacity-7">{item.type_of_fashion}</div> */}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center">
                                {item.type_of_fashion}
                              </td>
                              <td className="text-center">{item.size}</td>
                              <td className="text-center">{item.price}</td>
                              <td className="text-center"><img style={{width:"200px"}} src= {"http://127.0.0.1:8000/uploads/"+item.media[0].id+"/"+item.media[0].file_name}/>
                             </td>
                              <td className="text-center">
                                <Link
                                 to={"/update-page/" + item.id}
                                  className="mr-2 btn-icon btn-icon-only btn btn-outline-secondary"
                                >
                                  <i className="pe-7s-config btn-icon-wrapper">
                                    {" "}
                                  </i>
                                </Link>
                              </td>
                              <td className="text-center">
                                <button
                                  onClick={() => deleteCategory(item.id)}
                                  className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"
                                >
                                  <i className="pe-7s-trash btn-icon-wrapper">
                                    {" "}
                                  </i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="d-block text-center card-footer"></div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
