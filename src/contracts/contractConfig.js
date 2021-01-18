module.exports = {
  ABI: process.env.NODE_ENV === 'production' ? require('./abi') : require('./abi_dev'),
  ABI_REFERRAL: require('./abi_referral'),

  RPC: process.env.NODE_ENV === 'production' ?
    'https://rpc.tomochain.com' :
    'https://rpc.testnet.tomochain.com',

  RPC_READ: process.env.NODE_ENV === 'production' ?
    'https://rpc.tomochain.com' :
    'https://rpc.testnet.tomochain.com',

  RPC_READ_SOCKET: process.env.NODE_ENV === 'production' ?
    'wss://ws.tomochain.com' :
    'wss://ws.tomochain.com',

  NETWORK_ID: process.env.NODE_ENV === 'production' ? '88' : '89',
  REFERRAL_ADDRESS: process.env.NODE_ENV === 'production' ?
    '0xce8419d22fa23196aeb354c028a231e51729f823' :
    '0xce8419d22fa23196aeb354c028a231e51729f823',
  ADDRESS: process.env.NODE_ENV === 'production' ?
    '0xbf1dcb735e512b731abd3404c15df6431bd03d42' :
    '0x29bDBE930E3a3461518a6bD815E7f982b881F68E'
}