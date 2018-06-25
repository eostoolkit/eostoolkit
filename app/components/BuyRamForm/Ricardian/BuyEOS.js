import React from 'react';

const BuyEOS = () => (
  <p>
    This action will attempt to reserve about {'{ quant }'} worth of RAM on behalf of {'{ receiver }'}.
    <br />
    <br />
    {'{ buyer }'} authorizes this contract to transfer {'{ quant }'} to buy RAM based upon the current price as
    determined by the market maker algorithm.
    <br />
    <br />
    {'{ buyer }'} accepts that a 0.5% fee will be charged on the amount spent and that the actual RAM received may be
    slightly less than expected due to the approximations necessary to enable this service.
    <br />
    <br />
    {'{ buyer }'} accepts that a 0.5% fee will be charged if and when they sell the RAM received.
    <br />
    <br />
    {'{ buyer }'} accepts that rounding errors resulting from limits of computational precision may result in less RAM
    being allocated.
    <br />
    <br />
    {'{ buyer }'} acknowledges that the supply of RAM may be increased at any time up to the limits of off-the-shelf
    computer equipment and that this may result in RAM selling for less than purchase price.
    <br />
    <br />
    {'{ buyer }'} acknowledges that the price of RAM may increase or decrease over time according to supply and demand.
    <br />
    <br />
    {'{ buyer }'} acknowledges that RAM is non-transferrable.
    <br />
    <br />
    {'{ buyer }'} acknowledges RAM currently in use by their account cannot be sold until it is freed and that freeing
    RAM may be subject to terms of other contracts.
  </p>
);

export default BuyEOS;
