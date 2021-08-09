import React, { useEffect,useState } from "react"
import {Link,useHistory} from "react-router-dom"

const Addadmin=()=> {
  let admin = JSON.parse(localStorage.getItem('admin-info'));
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();
    async function addadmin() {
        let item={name,password,email}
        console.log(item);
        let result = await fetch("http://127.0.0.1:8000/api/singing/admin", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
          console.log(result);
          alert("data has been seved");

    }
    async function logout() {
      localStorage.clear();
       console.log(localStorage);
       history.push("/login-admin");
     }
    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div className="app-header header-shadow">
          <div className="app-header__logo">
            <div className="logo-src" />
            <div className="header__pane ml-auto">
              <div>
                <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="app-header__mobile-menu">
            <div>
              <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
          <div className="app-header__menu">
            <span>
              <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                <span className="btn-icon-wrapper">
                  <i className="fa fa-ellipsis-v fa-w-6" />
                </span>
              </button>
            </span>
          </div>    <div className="app-header__content">
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
              
              </ul>      </div>
            <div className="app-header-right">
              <div className="header-btn-lg pr-0">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                   
                    <div className="widget-content-left  ml-3 header-user-info">
                      <div className="widget-heading">
                      Wellcome Back {admin.user.name.toUpperCase()}
                      </div>
                     
                    </div>
                   
                  </div>
                </div>
              </div>      </div>
          </div>
        </div>        
              <div className="app-main">
          <div className="app-sidebar sidebar-shadow">
            <div className="app-header__logo">
              <div className="logo-src" />
              <div className="header__pane ml-auto">
                <div>
                  <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="app-header__mobile-menu">
              <div>
                <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
            <div className="app-header__menu">
              <span>
                <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                  <span className="btn-icon-wrapper">
                    <i className="fa fa-ellipsis-v fa-w-6" />
                  </span>
                </button>
              </span>
            </div>    <div className="scrollbar-sidebar">
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
                      Add category
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> 

                <div class="app-main__outer">
                    <div class="app-main__inner">
                      
                             
                        <div class="tab-content">
                            <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
                                <div class="main-card mb-3 card">
                                    <div class="card-body"><h5 class="card-title">Admin Information</h5>
                                        <form class="">
                                            <div class="form-row">
                                                <div class="col-md-12">
                                                    <div class="position-relative form-group"><label  class="">Name</label><input name="name"  placeholder="Enter Name Of Admin" type="name" class="form-control"  onChange={(e) => setName(e.target.value)}/></div>
                                                </div>
                                                <div class="col-md-12">
                                                <div class="position-relative form-group"><label for="exampleEmail11" class="">Email</label><input name="email" id="exampleEmail11" placeholder="Enter Email Of Admin" type="email" class="form-control"  onChange={(e) => setEmail(e.target.value)}/></div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="position-relative form-group"><label for="examplePassword11" class="">Password</label><input name="password" id="examplePassword11" placeholder="Enter The Password" type="password"
                                                                                                                                                          onChange={(e) => setPassword(e.target.value)}    class="form-control"/></div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="position-relative form-group"><label for="examplePassword11" class="">Confirm The Password</label><input name="password" id="examplePassword11" placeholder="Confirm The Password" type="password"
                                                                                                                                                             class="form-control"/></div>
                                                </div>
                                            </div>
                                          
                                           
                                        </form>
                                        <button class="mt-2 btn btn-primary" onClick={addadmin}  >Sign in</button>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="tab-pane tabs-animation fade" id="tab-content-1" role="tabpanel">
                                <div class="main-card mb-3 card">
                                    <div class="card-body"><h5 class="card-title">Grid</h5>
                                        <form class="">
                                            <div class="position-relative row form-group"><label for="exampleEmail" class="col-sm-2 col-form-label">Email</label>
                                                <div class="col-sm-10"><input name="email" id="exampleEmail" placeholder="with a placeholder" type="email" class="form-control"/></div>
                                            </div>
                                            <div class="position-relative row form-group"><label for="examplePassword" class="col-sm-2 col-form-label">Password</label>
                                                <div class="col-sm-10"><input name="password" id="examplePassword" placeholder="password placeholder" type="password" class="form-control"/></div>
                                            </div>
                                            <div class="position-relative row form-group"><label for="exampleSelect" class="col-sm-2 col-form-label">Select</label>
                                                <div class="col-sm-10"><select name="select" id="exampleSelect" class="form-control"></select></div>
                                            </div>
                                            <div class="position-relative row form-group"><label for="exampleSelectMulti" class="col-sm-2 col-form-label">Select Multiple</label>
                                                <div class="col-sm-10"><select multiple="" name="selectMulti" id="exampleSelectMulti" class="form-control"></select></div>
                                            </div>
                                            <div class="position-relative row form-group"><label for="exampleText" class="col-sm-2 col-form-label">Text Area</label>
                                                <div class="col-sm-10"><textarea name="text" id="exampleText" class="form-control"></textarea></div>
                                            </div>
                                            <div class="position-relative row form-group"><label for="exampleFile" class="col-sm-2 col-form-label">File</label>
                                                <div class="col-sm-10"><input name="file" id="exampleFile" type="file" class="form-control-file"/>
                                                    <small class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                                                </div>
                                            </div>
                                            <fieldset class="position-relative row form-group">
                                                <legend class="col-form-label col-sm-2">Radio Buttons</legend>
                                                <div class="col-sm-10">
                                                    <div class="position-relative form-check"><label class="form-check-label"><input name="radio2" type="radio" class="form-check-input"/> Option one is this and that—be sure to include why it's great</label></div>
                                                    <div class="position-relative form-check"><label class="form-check-label"><input name="radio2" type="radio" class="form-check-input"/> Option two can be something else and selecting it will deselect option
                                                        one</label></div>
                                                    <div class="position-relative form-check disabled"><label class="form-check-label"><input name="radio2" disabled="" type="radio" class="form-check-input"/> Option three is disabled</label></div>
                                                </div>
                                            </fieldset>
                                            <div class="position-relative row form-group"><label for="checkbox2" class="col-sm-2 col-form-label">Checkbox</label>
                                                <div class="col-sm-10">
                                                    <div class="position-relative form-check"><label class="form-check-label"><input id="checkbox2" type="checkbox" class="form-check-input"/> Check me out</label></div>
                                                </div>
                                            </div>
                                            <div class="position-relative row form-check">
                                                <div class="col-sm-10 offset-sm-2">
                                                    <button class="btn btn-secondary">Submit</button>
                                                </div>
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




    )}
  export default Addadmin
  