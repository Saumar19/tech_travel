import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import CartContext from '../../context/cart';

import {
  Container,
  ContainerList,
  TravelItems,
  Info,
  Quantity,
  Subtotal,
  Total,
} from './styles';

function Cart() {
  const { state, setState } = useContext(CartContext);

  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => (
          <TravelItems>
            <img src={el.photo} alt={el.tittle} />
            <Info>
              <p>{el.tittle}</p>
              <strong>{el.price}</strong>
            </Info>
            <Quantity readOnly type="number" value={el.quantity} />
            <Subtotal>
              <p>{el.quantity * el.price}</p>
              <button type="button">
                <MdDelete size={24} color="#0676d9" />
              </button>
            </Subtotal>
          </TravelItems>
        ))}
        <Total>
          <p>
            Total $
            {state.cart.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0,
            )}{' '}
            .00
          </p>
        </Total>
      </ContainerList>
    </Container>
  );
}

export default Cart;
