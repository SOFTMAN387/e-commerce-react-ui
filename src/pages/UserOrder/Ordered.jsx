import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/common/header/Header';
import Services from '../../components/common/service/Services';
import { Link } from 'react-router-dom';
import Footer from '../../components/common/footer/Footer';
import "./ordered.css"

const Ordered = () => {
    const UserOrderedDetails = useSelector((state) => state.currentUserOrdered) ?? [];
    // console.log(UserOrderedDetails.UserAdd);
    // console.log(UserOrderedDetails.UserPdct);
    // console.log(UserOrderedDetails.UserPdct.length);
    const d= new Date();
     const OrderedPrdct=UserOrderedDetails.UserPdct;
     const OrderedAdd=UserOrderedDetails.UserAdd;
    // console.log(OrderedAdd);
    return ( <>
    <Header />
   <div className='container'>
   <div className='card'>
        <header className="card-header"> My Orders / Tracking </header>
        {UserOrderedDetails.UserPdct?.length >0 ?(
            <div className='card-body'>
             <h6>Order ID: OD45345345435</h6>  {
                UserOrderedDetails.payMode==="cash"?( <h6>PayMent Mode: <b className='text-primary'>Cash On Delivery , Total: RS-/{UserOrderedDetails.Total}</b></h6>  ):
                ( <h6>PayMent Mode: <b className='text-danger'> Paid , Rs-/ {UserOrderedDetails.Total}</b></h6>  )
             }
            <p >{`Delivery to, ${OrderedAdd.shipping_name},${OrderedAdd.shipping_address_city},${OrderedAdd.shipping_address_line1},${OrderedAdd.shipping_address_zip}`} </p>
            
             <div className='card'>
             <div className="card-body row">
                    <div className="col"> <strong>Estimated Delivery time:</strong> <br/>{d.toLocaleDateString()} </div>
                    <div className="col"> <strong>Shipping BY:</strong> <br/> The SoftMan, | <i className="fa fa-phone"></i> +1598675986 </div>
                    <div className="col"> <strong>Status:</strong> <br/> Picked by the courier </div>
                    <div className="col"> <strong>Tracking #:</strong> <br/> BD045903594059 </div>
                </div>

             </div> 

             <div className="track">
                <div className="step active"> <span className="icon"> <i className="fa fa-check"></i> </span> <span className="text">Order confirmed</span> </div>
                <div className="step active"> <span className="icon"> <i className="fa fa-user"></i> </span> <span className="text"> Picked by courier</span> </div>
                <div className="step"> <span className="icon"> <i className="fa fa-truck"></i> </span> <span className="text"> On the way </span> </div>
                <div className="step"> <span className="icon"> <i className="fa fa-box"></i> </span> <span className="text">Ready for pickup</span> </div>
            </div>
            <hr />
            <ul className="row">{
                OrderedPrdct?.map((items,index)=>{
                    return (<>
                    <li className="col-md-4" key={index}>
                    <figure className="itemside mb-3">
                        <div className="aside"><img src={items.item?.[0].img} className="img-sm border" alt="order-img"/></div>
                        <figcaption className="info align-self-center">
                            <p className="title">{items.item?.[0].title}<br /> {items.item?.[0].desc}</p> <span className="text-muted">{items.item?.[0].price} </span>
                        </figcaption>
                    </figure>
                </li>
                    </>)
                })
            }
                
              
            </ul> 
            <hr />
            <Link to="/" class="btn btn-warning" data-abc="true"> <i class="fa fa-chevron-left"></i> Back to orders</Link>

        </div>
        ):
        (<div>
            <span>Opps ! You Have No Order.. </span>
            <hr />
            <Link to="/" class="btn btn-warning" data-abc="true"> <i class="fa fa-chevron-left"></i> Back to orders</Link>
         </div>)}
       
   </div>

   </div>
   <Services />
   <Footer />
         </>
   
    )
}

export default Ordered;