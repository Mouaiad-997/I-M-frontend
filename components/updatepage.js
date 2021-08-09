import React, { useEffect, useState , useRef } from "react";
import { Link,useHistory } from "react-router-dom";

const Updatepage = (props) => {
  let admin = JSON.parse(localStorage.getItem('admin-info'));
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [type_of_fashion, setTypeOfFashion] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();

  useEffect(async () => {
 let result = await fetch("http://127.0.0.1:8000/api/categoryById/" + props.match.params.id);
    result = await result.json();
    console.log(data)
     setData(result);
     setName(result[0].name);
     setCategory(result[0].category);
     setTypeOfFashion(result[0].type_of_fashion);
     setSize(result[0].size);
     setPrice(result[0].price);
    //  setImage("http://127.0.0.1:8000/uploads/"+result[0].media[0].id+"/"+result[0].media[0].file_name);
  }, []);
  async function logout() {
    localStorage.clear();
     console.log(localStorage);
     history.push("/login-admin");
   }
  async function updateCategory(id) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("type_of_fashion", type_of_fashion);
    formData.append("size", size);
    formData.append("price", price);
    formData.append("image", image);
   let item={name,category,type_of_fashion,size,price,image}
    let result = await fetch(
      "http://127.0.0.1:8000/api/updateCategory/" + id,
      {
        method: 'POST',
        body: formData
      });
console.log(item);
    alert("data has been seved");
  };
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
                    <div className="widget-content-left">
                     
                    </div>
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
                      Add Category
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="tab-content">
                <div
                  className="tab-pane tabs-animation fade show active"
                  id="tab-content-0"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card-body">
                        <h5 className="card-title">Update Category</h5>
                        {data.map((item) =>
                        <div>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Update Name To
                              </span>
                            </div>
                           
                            <input
                              type="text"
                              defaultValue={item.name}
                              className="form-control"
                              onChange={(e) => setName(e.target.value)}
                              
                            />
                          </div>
                          <br />
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Update Category To
                              </span>
                            </div>
                            <input
                              type="text"
                              defaultValue={item.category}
                              className="form-control"
                              onChange={(e) => setCategory(e.target.value)}
                            />
                          </div>
                          <br />
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Update Type Of Fashion To
                              </span>
                            </div>
                            <input
                              defaultValue={item.type_of_fashion}
                              type="text"
                              className="form-control"
                              onChange={(e) => setTypeOfFashion(e.target.value)}
                            />
                          </div>
                          <br />
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Update Size To
                              </span>
                            </div>
                            <input
                              defaultValue={item.size}
                              type="text"
                              className="form-control"
                              onChange={(e) => setSize(e.target.value)}
                            />
                          </div>
                          <br />
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                Update Price To
                              </span>
                            </div>
                            <input
                              defaultValue={item.price}
                              type="text"
                              className="form-control"
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </div>
                          <br />
                          <div className="input-group">
                            <div className="input-group-prepend">
                            <img style={{width:"200px"}} src= {"http://127.0.0.1:8000/uploads/"+item.media[0].id+"/"+item.media[0].file_name}/>
                             <span className="input-group-text">
                                Update Image To
                              </span>
                            </div>
                            <input
                            style={{height:"120px"}}
                              type="file"
                              className="form-control"
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                            </div>
                            <br/>
                            
                          <button
                            onClick={() => updateCategory(item.id)}
                            className="btn btn-primary"
                          >
                            Update
                          </button>
                          
                        </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane tabs-animation fade"
                  id="tab-content-1"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="main-card mb-3 card">
                        <div className="card-body">
                          <h5 className="card-title">Input Groups</h5>
                          <div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                              </div>
                              <input
                                placeholder="username"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <br />
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <input
                                    aria-label="Checkbox for following text input"
                                    type="checkbox"
                                    className
                                  />
                                </span>
                              </div>
                              <input
                                placeholder="Check it out"
                                type="text"
                                className="form-control"
                              />
                            </div>
                            <br />
                            <div className="input-group">
                              <input
                                placeholder="username"
                                type="text"
                                className="form-control"
                              />
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  @example.com
                                </span>
                              </div>
                            </div>
                            <br />
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">$</span>
                                <span className="input-group-text">$</span>
                              </div>
                              <input
                                placeholder="Dolla dolla billz yo!"
                                type="text"
                                className="form-control"
                              />
                              <div className="input-group-append">
                                <span className="input-group-text">$</span>
                                <span className="input-group-text">$</span>
                              </div>
                            </div>
                            <br />
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">$</span>
                              </div>
                              <input
                                placeholder="Amount"
                                step={1}
                                type="number"
                                className="form-control"
                              />
                              <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main-card mb-3 card">
                        <div className="card-body">
                          <h5 className="card-title">
                            Input Group Button Dropdown
                          </h5>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <button
                                type="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                className="dropdown-toggle btn btn-secondary"
                              >
                                Button Dropdown
                              </button>
                              <div
                                tabIndex={-1}
                                role="menu"
                                aria-hidden="true"
                                className="dropdown-menu"
                              >
                                <h6 tabIndex={-1} className="dropdown-header">
                                  Header
                                </h6>
                                <button
                                  type="button"
                                  disabled
                                  tabIndex={-1}
                                  className="disabled dropdown-item"
                                >
                                  Action
                                </button>
                                <button
                                  type="button"
                                  tabIndex={0}
                                  className="dropdown-item"
                                >
                                  Another Action
                                </button>
                                <div
                                  tabIndex={-1}
                                  className="dropdown-divider"
                                />
                                <button
                                  type="button"
                                  tabIndex={0}
                                  className="dropdown-item"
                                >
                                  Another Action
                                </button>
                              </div>
                            </div>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="main-card mb-3 card">
                        <div className="card-body">
                          <h5 className="card-title">
                            Input Group Button Shorthand
                          </h5>
                          <div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <button className="btn btn-secondary">
                                  To the Left!
                                </button>
                              </div>
                              <input type="text" className="form-control" />
                            </div>
                            <br />
                            <div className="input-group">
                              <input type="text" className="form-control" />
                              <div className="input-group-append">
                                <button className="btn btn-secondary">
                                  To the Right!
                                </button>
                              </div>
                            </div>
                            <br />
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <button className="btn btn-danger">
                                  To the Left!
                                </button>
                              </div>
                              <input
                                placeholder="and..."
                                type="text"
                                className="form-control"
                              />
                              <div className="input-group-append">
                                <button className="btn btn-success">
                                  To the Right!
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="main-card mb-3 card">
                        <div className="card-body">
                          <h5 className="card-title">Input Group Sizing</h5>
                          <div>
                            <div className="input-group input-group-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text">@lg</span>
                              </div>
                              <input type="text" className="form-control" />
                            </div>
                            <br />
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  @normal
                                </span>
                              </div>
                              <input type="text" className="form-control" />
                            </div>
                            <br />
                            <div className="input-group input-group-sm">
                              <div className="input-group-prepend">
                                <span className="input-group-text">@sm</span>
                              </div>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main-card mb-3 card">
                        <div className="card-body">
                          <h5 className="card-title">Input Group Addon</h5>
                          <div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  To the Left!
                                </span>
                              </div>
                              <input type="text" className="form-control" />
                            </div>
                            <br />
                            <div className="input-group">
                              <input type="text" className="form-control" />
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  To the Right!
                                </span>
                              </div>
                            </div>
                            <br />
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  To the Left!
                                </span>
                              </div>
                              <input
                                placeholder="and..."
                                type="text"
                                className="form-control"
                              />
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  To the Right!
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main-card mb-3 card">
                        <div className="card-body">
                          <h5 className="card-title">Input Group Button</h5>
                          <div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <button className="btn btn-secondary">
                                  I'm a button
                                </button>
                              </div>
                              <input type="text" className="form-control" />
                            </div>
                            <br />
                            <div className="input-group">
                              <input type="text" className="form-control" />
                              <div className="input-group-append">
                                <button
                                  type="button"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  className="dropdown-toggle btn btn-secondary"
                                >
                                  Button Dropdown
                                </button>
                                <div
                                  tabIndex={-1}
                                  role="menu"
                                  aria-hidden="true"
                                  className="dropdown-menu"
                                >
                                  <h6 tabIndex={-1} className="dropdown-header">
                                    Header
                                  </h6>
                                  <button
                                    type="button"
                                    disabled
                                    tabIndex={-1}
                                    className="disabled dropdown-item"
                                  >
                                    Action
                                  </button>
                                  <button
                                    type="button"
                                    tabIndex={0}
                                    className="dropdown-item"
                                  >
                                    Another Action
                                  </button>
                                  <div
                                    tabIndex={-1}
                                    className="dropdown-divider"
                                  />
                                  <button
                                    type="button"
                                    tabIndex={0}
                                    className="dropdown-item"
                                  >
                                    Another Action
                                  </button>
                                </div>
                              </div>
                            </div>
                            <br />
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary">
                                  Split Button
                                </button>
                                <button
                                  type="button"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  className="dropdown-toggle dropdown-toggle-split btn btn-outline-secondary"
                                >
                                  <span className="sr-only">
                                    Toggle Dropdown
                                  </span>
                                </button>
                                <div
                                  tabIndex={-1}
                                  role="menu"
                                  aria-hidden="true"
                                  className="dropdown-menu"
                                >
                                  <h6 tabIndex={-1} className="dropdown-header">
                                    Header
                                  </h6>
                                  <button
                                    type="button"
                                    disabled
                                    tabIndex={-1}
                                    className="disabled dropdown-item"
                                  >
                                    Action
                                  </button>
                                  <button
                                    type="button"
                                    tabIndex={0}
                                    className="dropdown-item"
                                  >
                                    Another Action
                                  </button>
                                  <div
                                    tabIndex={-1}
                                    className="dropdown-divider"
                                  />
                                  <button
                                    type="button"
                                    tabIndex={0}
                                    className="dropdown-item"
                                  >
                                    Another Action
                                  </button>
                                </div>
                              </div>
                              <input
                                placeholder="and..."
                                type="text"
                                className="form-control"
                              />
                              <div className="input-group-append">
                                <button className="btn btn-secondary">
                                  I'm a button
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane tabs-animation fade"
                  id="tab-content-2"
                  role="tabpanel"
                >
                  <form className>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="main-card mb-3 card">
                          <div className="card-body">
                            <h5 className="card-title">Checkboxes</h5>
                            <div className="position-relative form-group">
                              <div>
                                <div className="custom-checkbox custom-control">
                                  <input
                                    type="checkbox"
                                    id="exampleCustomCheckbox"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="exampleCustomCheckbox"
                                  >
                                    Check this custom checkbox
                                  </label>
                                </div>
                                <div className="custom-checkbox custom-control">
                                  <input
                                    type="checkbox"
                                    id="exampleCustomCheckbox2"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="exampleCustomCheckbox2"
                                  >
                                    Or this one
                                  </label>
                                </div>
                                <div className="custom-checkbox custom-control">
                                  <input
                                    type="checkbox"
                                    id="exampleCustomCheckbox3"
                                    disabled
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="exampleCustomCheckbox3"
                                  >
                                    But not this disabled one
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="main-card mb-3 card">
                          <div className="card-body">
                            <h5 className="card-title">Inline</h5>
                            <div className="position-relative form-group">
                              <div>
                                <div className="custom-checkbox custom-control custom-control-inline">
                                  <input
                                    type="checkbox"
                                    id="exampleCustomInline"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="exampleCustomInline"
                                  >
                                    An inline custom input
                                  </label>
                                </div>
                                <div className="custom-checkbox custom-control custom-control-inline">
                                  <input
                                    type="checkbox"
                                    id="exampleCustomInline2"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="exampleCustomInline2"
                                  >
                                    and another one
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="main-card mb-3 card">
                          <div className="card-body">
                            <h5 className="card-title">Radios</h5>
                            <div className="position-relative form-group">
                              <div>
                                <div className="custom-radio custom-control">
                                  <input
                                    type="radio"
                                    id="exampleCustomRadio"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="exampleCustomRadio"
                                  >
                                    Select this custom radio
                                  </label>
                                </div>
                                <div className="custom-radio custom-control">
                                  <input
                                    type="radio"
                                    id="exampleCustomRadio2"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="exampleCustomRadio2"
                                  >
                                    Or this one
                                  </label>
                                </div>
                                <div className="custom-radio custom-control">
                                  <input
                                    type="radio"
                                    id="exampleCustomRadio3"
                                    disabled
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="exampleCustomRadio3"
                                  >
                                    But not this disabled one
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="main-card mb-3 card">
                          <div className="card-body">
                            <h5 className="card-title">Form Select</h5>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="position-relative form-group">
                                  <label
                                    htmlFor="exampleCustomSelect"
                                    className
                                  >
                                    Custom Select
                                  </label>
                                  <select
                                    type="select"
                                    id="exampleCustomSelect"
                                    name="customSelect"
                                    className="custom-select"
                                  >
                                    <option value>Select</option>
                                    <option>Value 1</option>
                                    <option>Value 2</option>
                                    <option>Value 3</option>
                                    <option>Value 4</option>
                                    <option>Value 5</option>
                                  </select>
                                </div>
                                <div className="position-relative form-group">
                                  <label
                                    htmlFor="exampleCustomMutlipleSelect"
                                    className
                                  >
                                    Custom Multiple Select
                                  </label>
                                  <select
                                    multiple
                                    type="select"
                                    id="exampleCustomMutlipleSelect"
                                    name="customSelect"
                                    className="custom-select"
                                  >
                                    <option value>Select</option>
                                    <option>Value 1</option>
                                    <option>Value 2</option>
                                    <option>Value 3</option>
                                    <option>Value 4</option>
                                    <option>Value 5</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="position-relative form-group">
                                  <label
                                    htmlFor="exampleCustomSelectDisabled"
                                    className
                                  >
                                    Custom Select Disabled
                                  </label>
                                  <select
                                    type="select"
                                    id="exampleCustomSelectDisabled"
                                    name="customSelect"
                                    disabled
                                    className="custom-select"
                                  >
                                    <option value>Select</option>
                                    <option>Value 1</option>
                                    <option>Value 2</option>
                                    <option>Value 3</option>
                                    <option>Value 4</option>
                                    <option>Value 5</option>
                                  </select>
                                </div>
                                <div className="position-relative form-group">
                                  <label
                                    htmlFor="exampleCustomMutlipleSelectDisabled"
                                    className
                                  >
                                    Custom Multiple Select Disabled
                                  </label>
                                  <select
                                    multiple
                                    type="select"
                                    id="exampleCustomMutlipleSelectDisabled"
                                    name="customSelect"
                                    disabled
                                    className="custom-select"
                                  >
                                    <option value>Select</option>
                                    <option>Value 1</option>
                                    <option>Value 2</option>
                                    <option>Value 3</option>
                                    <option>Value 4</option>
                                    <option>Value 5</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updatepage;
