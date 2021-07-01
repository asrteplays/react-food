import React from 'react';

function Product (props) {

  const [isAdded, setIsAdded] = React.useState(false);

  const onClickButton = () => {
    setIsAdded(!isAdded);
  };

  console.log(isAdded);

  return ( 
    <div className="product">
      <button className="button-heart">
        <svg viewBox="0 0 20 18">
          <path d="M9.42206 2.578L9.95695 3.22473L10.5397 2.62078C11.6005 1.52141 12.9964 0.75 14.5263 0.75C17.1825 0.75 19.25 2.73176 19.25 5.4C19.25 7.00155 18.5272 8.53525 17.0817 10.2699C15.6293 12.0128 13.5216 13.8722 10.881 16.13L10.8661 16.1427L10.8519 16.1563L10 16.9655L9.14814 16.1563L9.13686 16.1455L9.12514 16.1353C6.4796 13.8231 4.37143 11.964 2.91662 10.2304C1.47054 8.50714 0.75 6.99921 0.75 5.4C0.75 2.73176 2.8175 0.75 5.47368 0.75C7.05064 0.75 8.41353 1.3586 9.42206 2.578Z" fill="white" stroke="#C4C4C4" stroke-width="1.5"></path>
        </svg>
      </button>
      <div className="product__img">
        <img src={props.imgUrl} alt="Borraja" />
      </div>
      <div className="product__content">
        <h4 className="product-content__name"><span>{props.name}</span><br /><b>{props.desc},</b> {props.size}ml</h4>
        <div className="product-content__price">{props.price} &#8364;</div>
        <button className="button button-product" onClick={onClickButton}>
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.301 7.95909C25.2726 7.51795 24.9077 7.17484 24.4655 7.17484H20.0377V5.86666C20.0377 3.24703 17.5532 1.11538 14.5 1.11538C11.4469 1.11538 8.96232 3.24703 8.96232 5.86666V7.17484H4.53455C4.09231 7.17484 3.72742 7.51795 3.6991 7.95909L2.51073 26.9958C2.49657 27.2267 2.57827 27.4522 2.73621 27.621C2.89415 27.7888 3.11526 27.8846 3.34618 27.8846H25.6539C25.8848 27.8846 26.1059 27.7888 26.2639 27.621C26.4218 27.4522 26.5035 27.2267 26.4893 26.9958L25.301 7.95909ZM10.6354 5.86666C10.6354 4.16962 12.3695 2.78846 14.5 2.78846C16.6306 2.78846 18.3647 4.16962 18.3647 5.86666V7.17484H10.6354V5.86666ZM8.96232 8.84792V10.6648C8.96232 11.1266 9.33702 11.5013 9.79886 11.5013C10.2607 11.5013 10.6354 11.1266 10.6354 10.6648V8.84792H18.3647V10.6648C18.3647 11.1266 18.7394 11.5013 19.2012 11.5013C19.663 11.5013 20.0377 11.1266 20.0377 10.6648V8.84792H23.6791L24.4039 20.4484H4.59616L5.32098 8.84792H8.96232ZM4.23609 26.2115L4.52651 21.5637H24.4735L24.764 26.2115H4.23609Z" fill="#333333"/>
          </svg>
        {isAdded ? 'Is added' : 'Add to cart'}</button>
      </div>
    </div>
  );
}
export default Product;