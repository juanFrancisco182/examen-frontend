<template>
   <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div id="main-wrapper">
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
        <header class="topbar">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                <div class="navbar-header">
                    <!-- This is for the sidebar toggle which is visible on mobile only -->
                    <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i
                            class="ti-menu ti-close"></i></a>
                    <!-- ============================================================== -->
                    <!-- Logo -->
                    <!-- ============================================================== -->
                    <a class="navbar-brand" href="index.html">
                        <!-- Logo text -->
                        <span class="logo-text">
                            <!-- dark Logo text -->
                            <img src="./assets/images/logo-text.png" alt="homepage" class="dark-logo" />
                            <!-- Light Logo text -->
                            <img src="./assets/images/logo-light-text.png" class="light-logo" alt="homepage" />
                        </span>
                    </a>
                    <!-- ============================================================== -->
                    <!-- End Logo -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- Toggle which is visible on mobile only -->
                    <!-- ============================================================== -->
                    <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)"
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i
                            class="ti-more"></i></a>
                </div>
                <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== -->
                <div class="navbar-collapse collapse" id="navbarSupportedContent">
                    <!-- ============================================================== -->
                    <!-- toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav mr-auto">
                        <!-- This is  -->
                        <li class="nav-item"> <a class="nav-link sidebartoggler d-none d-md-block waves-effect waves-dark" href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
                    </ul>
                    <!-- ============================================================== -->
                    <!-- Right side toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav justify-content-end">
                        <!-- ============================================================== -->
                        <!-- Search -->
                        <!-- ============================================================== -->
                        <li class="nav-item d-none d-md-block search-box"> <a
                                class="nav-link d-none d-md-block waves-effect waves-dark" href="javascript:void(0)"><i
                                    class="ti-search"></i></a>
                            <form class="app-search">
                                <input type="text" class="form-control" placeholder="Search & enter"> 
                                <a class="srh-btn"><i class="ti-close"></i></a> 
                            </form>
                        </li>
                        <!-- ============================================================== -->
                        <!-- Comment -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-message"></i>
                                <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
                                <ul class="list-style-none">
                                    <li>
                                        <div class="border-bottom rounded-top py-3 px-4">
                                            <div class="mb-0 font-weight-medium font-16">Notifications</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="message-center notifications position-relative" style="height:250px;">
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span class="btn btn-danger rounded-circle btn-circle"><i class="fa fa-link"></i></span>
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Luanch Admin</h5> <span class="font-12 text-nowrap d-block time text-truncate">Just see the my new admin!</span> <span class="font-12 text-nowrap d-block subtext">9:30 AM</span> </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span class="btn btn-success rounded-circle btn-circle"><i class="ti-calendar"></i></span>
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Event today</h5> <span class="font-12 text-nowrap d-block time text-truncate">Just a reminder that you have event</span> <span class="font-12 text-nowrap d-block subtext">9:10 AM</span> </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span class="btn btn-info rounded-circle btn-circle"><i class="ti-settings"></i></span>
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Settings</h5> <span class="font-12 text-nowrap d-block time text-truncate">You can customize this template as you want</span> <span class="font-12 text-nowrap d-block subtext">9:08 AM</span> </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span class="btn btn-primary rounded-circle btn-circle"><i class="ti-user"></i></span>
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Pavan kumar</h5> <span class="font-12 text-nowrap d-block time text-truncate">Just see the my admin!</span> <span class="font-12 text-nowrap d-block subtext">9:02 AM</span> </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a class="nav-link border-top text-center text-dark pt-3" href="javascript:void(0);"> <strong>Check all notifications</strong> <i class="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- End Comment -->
                        <!-- ============================================================== -->
                        <!-- ============================================================== -->
                        <!-- Messages -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" id="2"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i
                                    class="mdi mdi-email"></i>
                                <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
                            </a>
                            <div class="dropdown-menu mailbox dropdown-menu-right animated bounceInDown" aria-labelledby="2">
                                <ul class="list-style-none">
                                    <li>
                                        <div class="border-bottom rounded-top py-3 px-4">
                                            <div class="mb-0 font-weight-medium font-16">You have 4 new messages</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="message-center message-body position-relative" style="height:250px;">
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span class="user-img position-relative d-inline-block"> <img src="./assets/images/users/1.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle online"></span> </span>
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Pavan kumar</h5> <span class="font-12 text-nowrap d-block time text-truncate">Just see the my admin!</span> <span class="font-12 text-nowrap d-block subtext">9:30 AM</span> </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span class="user-img position-relative d-inline-block"> <img src="./assets/images/users/2.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle busy"></span> </span>
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Sonu Nigam</h5> <span class="font-12 text-nowrap d-block time text-truncate">I've sung a song! See you at</span> <span class="font-12 text-nowrap d-block subtext">9:10 AM</span> </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span class="user-img position-relative d-inline-block"> <img src="./assets/images/users/3.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle away"></span> </span>
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Arijit Sinh</h5> <span class="font-12 text-nowrap d-block time text-truncate">I am a singer!</span> <span class="font-12 text-nowrap d-block subtext">9:08 AM</span> </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span class="user-img position-relative d-inline-block"> <img src="./assets/images/users/4.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle offline"></span> </span>
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Pavan kumar</h5> <span class="font-12 text-nowrap d-block time text-truncate">Just see the my admin!</span> <span class="font-12 text-nowrap d-block subtext">9:02 AM</span> </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a class="nav-link border-top text-center text-dark pt-3" href="javascript:void(0);"> <b>See all e-Mails</b> <i class="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- End Messages -->
                        <!-- ============================================================== -->
                        <!-- ============================================================== -->
                        <!-- Mega Menu -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown mega-dropdown"> <a
                                class="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><i class="mdi mdi-view-grid"></i></a>
                                <div class="dropdown-menu animated bounceInDown">
                                    <ul class="mega-dropdown-menu row p-0 m-0 list-inline">
                                        <li class="col-lg-3 col-xlg-2 mb-4">
                                            <h4 class="mb-3">CAROUSEL</h4>
                                            <!-- CAROUSEL -->
                                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                                <div class="carousel-inner" role="listbox">
                                                    <div class="carousel-item active">
                                                        <div class="container"> <img class="d-block img-fluid"
                                                                src="./assets/images/big/img1.jpg" alt="First slide"></div>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <div class="container"><img class="d-block img-fluid"
                                                                src="./assets/images/big/img2.jpg" alt="Second slide">
                                                        </div>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <div class="container"><img class="d-block img-fluid"
                                                                src="./assets/images/big/img3.jpg" alt="Third slide"></div>
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href="#carouselExampleControls"
                                                    role="button" data-slide="prev"> <span
                                                        class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span> </a>
                                                <a class="carousel-control-next" href="#carouselExampleControls"
                                                    role="button" data-slide="next"> <span
                                                        class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span> </a>
                                            </div>
                                            <!-- End CAROUSEL -->
                                        </li>
                                        <li class="col-lg-3 mb-4">
                                            <h4 class="mb-3">ACCORDION</h4>
                                            <!-- Accordian -->
                                            <div id="accordion" class="nav-accordion" role="tablist"
                                                aria-multiselectable="true">
                                                <div class="card">
                                                    <div class="card-header" role="tab" id="headingOne">
                                                        <h5 class="mb-0">
                                                            <a data-toggle="collapse" data-parent="#accordion"
                                                                href="#collapseOne" aria-expanded="true"
                                                                aria-controls="collapseOne">
                                                                Collapsible Group Item #1
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseOne" class="collapse show" role="tabpanel"
                                                        aria-labelledby="headingOne">
                                                        <div class="card-body"> Anim pariatur cliche reprehenderit, enim
                                                            eiusmod high. </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" role="tab" id="headingTwo">
                                                        <h5 class="mb-0">
                                                            <a class="collapsed" data-toggle="collapse"
                                                                data-parent="#accordion" href="#collapseTwo"
                                                                aria-expanded="false" aria-controls="collapseTwo">
                                                                Collapsible Group Item #2
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwo" class="collapse" role="tabpanel"
                                                        aria-labelledby="headingTwo">
                                                        <div class="card-body"> Anim pariatur cliche reprehenderit, enim
                                                            eiusmod high life accusamus terry richardson ad squid. </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" role="tab" id="headingThree">
                                                        <h5 class="mb-0">
                                                            <a class="collapsed" data-toggle="collapse"
                                                                data-parent="#accordion" href="#collapseThree"
                                                                aria-expanded="false" aria-controls="collapseThree">
                                                                Collapsible Group Item #3
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseThree" class="collapse" role="tabpanel"
                                                        aria-labelledby="headingThree">
                                                        <div class="card-body"> Anim pariatur cliche reprehenderit, enim
                                                            eiusmod high life accusamus terry richardson ad squid. </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="col-lg-3  mb-4">
                                            <h4 class="mb-3">CONTACT US</h4>
                                            <!-- Contact -->
                                            <form>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="exampleInputname1"
                                                        placeholder="Enter Name"> </div>
                                                <div class="form-group">
                                                    <input type="email" class="form-control" placeholder="Enter email">
                                                </div>
                                                <div class="form-group">
                                                    <textarea class="form-control" id="exampleTextarea" rows="3"
                                                        placeholder="Message"></textarea>
                                                </div>
                                                <button type="submit" class="btn btn-info">Submit</button>
                                            </form>
                                        </li>
                                        <li class="col-lg-3 col-xlg-4 mb-4">
                                            <h4 class="mb-3">List style</h4>
                                            <!-- List style -->
                                            <ul class="list-style-none">
                                                <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i>
                                                        You can give link</a></li>
                                                <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i>
                                                        Give link</a></li>
                                                <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i>
                                                        Another Give link</a></li>
                                                <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i>
                                                        Forth link</a></li>
                                                <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i>
                                                        Another fifth link</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- End Mega Menu -->
                        <!-- ============================================================== -->
                        <!-- ============================================================== -->
                        <!-- Language -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href=""
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i
                                    class="flag-icon flag-icon-us"></i></a>
                            <div class="dropdown-menu dropdown-menu-right animated bounceInDown"> <a class="dropdown-item"
                                    href="#"><i class="flag-icon flag-icon-in"></i> India</a> <a class="dropdown-item"
                                    href="#"><i class="flag-icon flag-icon-fr"></i> French</a> <a class="dropdown-item"
                                    href="#"><i class="flag-icon flag-icon-cn"></i> China</a> <a class="dropdown-item"
                                    href="#"><i class="flag-icon flag-icon-de"></i> Dutch</a> </div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- Profile -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <img src="./assets/images/users/1.jpg" alt="user" width="30" class="profile-pic rounded-circle" />
                            </a>
                            <div class="dropdown-menu mailbox dropdown-menu-right animated bounceInDown">
                                <ul class="dropdown-user list-style-none">
                                    <li>
                                        <div class="dw-user-box p-3 d-flex">
                                            <div class="u-img"><img src="./assets/images/users/1.jpg" alt="user" class="rounded" width="80"></div>
                                            <div class="u-text ml-2">
                                                <h4 class="mb-0">Steave Jobs</h4>
                                                <p class="text-muted mb-1 font-14">varun@gmail.com</p>
                                                <a href="pages-profile.html" class="btn btn-rounded btn-danger btn-sm text-white d-inline-block">View
                                                    Profile</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li role="separator" class="dropdown-divider"></li>
                                    <li class="user-list"><a class="px-3 py-2" href="#"><i class="ti-user"></i> My Profile</a></li>
                                    <li class="user-list"><a class="px-3 py-2" href="#"><i class="ti-wallet"></i> My Balance</a></li>
                                    <li class="user-list"><a class="px-3 py-2" href="#"><i class="ti-email"></i> Inbox</a></li>
                                    <li role="separator" class="dropdown-divider"></li>
                                    <li class="user-list"><a class="px-3 py-2" href="#"><i class="ti-settings"></i> Account Setting</a></li>
                                    <li role="separator" class="dropdown-divider"></li>
                                    <li class="user-list"><a class="px-3 py-2" href="#"><i class="fa fa-power-off"></i> Logout</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <!-- ============================================================== -->
        <!-- End Topbar header -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <aside class="left-sidebar">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <li class="sidebar-item"><router-link to="/"> <a class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i class="fas fa-shopping-cart"></i><span class="hide-menu">Products</span></a></router-link></li>
                        <li class="sidebar-item"><router-link to="/users"> <a class="sidebar-link waves-effect waves-dark sidebar-link"  aria-expanded="false"><i class="fas fa-user"></i><span class="hide-menu">Usuarios</span></a></router-link></li>
                        <li class="sidebar-item"><router-link to="/mercado"> <a class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false"><i class="fas fa-shopping-cart"></i><span class="hide-menu">Mercado Libre</span></a></router-link></li>

                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>
        <!-- ============================================================== -->
        <!-- End Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper  -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
            <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <div class="container-fluid">
               <router-view/>
               
              
                <!-- ============================================================== -->
                <!-- Right sidebar -->
                <!-- ============================================================== -->
                <!-- .right-sidebar -->
                <!-- ============================================================== -->
                <!-- End Right sidebar -->
                <!-- ============================================================== -->
            </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- footer -->
            <!-- ============================================================== -->
            <footer class="footer">
                ?? 2022 Prueba
            </footer>
            <!-- ============================================================== -->
            <!-- End footer -->
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Page wrapper  -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- customizer Panel -->
    <!-- ============================================================== -->
 
</template>

<style>
.sidebar-nav ul .sidebar-item .sidebar-link i {
  
    font-size: 18px;
 
}
</style>
