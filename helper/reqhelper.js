/**
 * Created by hengliang.cui on 2014/12/18.
 */
module.exports = RequestHelper;

var RequestHelper = function(){

};

RequestHelper.makeReqHeader = function(){
    return {
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Cache-Control':'max-age=0',
        'Cookie':'ncvid=#vid#_140.206.187.134apVZ; npic=HqBfoxd9rhp93mGm7hqT8VQhL1HhVFMttoyaYLuZE8qRictRdujgIHSABLFZes/gCA==; NNB=WOFTSMSPPV6VI; WMONID=DLoNRfYT9La; page_uid=qoQmJlpyLOGssMF25fhssssssas-035862; personaconmain|zhaogangwang=EAE11B32508CF3CE07019BE8E8B9535BAA0202A7C7357754163ABC86EA813AD6; personacon|zhaogangwang=04E3582A5154D7A7568E7760760FA368FFF1803137B55FABFAD7E02C26958D12CB1E306FC7959A3E; nid_inf=1445251161; ncu=f1d6381f04482893a85e300812faa6f969874c99c0eb134425e6a7082e9e19c1669704f0588e; nci4=083ad2fbe6a8c4732dc384939e691776d1926c87fea46398542d65b51126d70ad0da0eef0d0183a3dd4619c4718a00f65f777a4d979fffd8cc2fb92b9ba439df86a0bab594b380ceb0bf9abd8bc7a8a387af9cd3a4ab8ea9a6979a92b691ace6e5e7f0f9f3fbff8d80a78fbdf6f1998b8d8be281818282e986999b99a4; ncmc4=8ebc547d602e42f5ab45021518fa92e24c16ee035f1bec3ecb281beb7467b473b274887f9cb9262c7cd0cc12ab7ff02ed7c1e8c5213e776e7ba70ff51312e55e; ncvc2=fbdc32150e422299a2543a02748ff28424788263337e8242a0655d893c17f1342d; NID_SES=AAABYR/L9ZR64jhGFOsMXyqtrWylbMCRwI8JL97BAocIUd3sCnTVQAqN4ox5ZPyJyXqXaUmCAaLARfOwNpjXawDKYGrax07Zc2OEBtfmKTpCkq36tB3dDDbWodez5bnhRmQio3rZaFXr12R2yxL8kxZt6bCeDPgkoXiz+CUkyorzLq44lzPZGUgccDQx7z4twUijC+KqubZOSH11weEdaqsUradMdziqRyZTf5XYOUW+wkWelJlQB0wnXtvlMGYnVSFk/fhJ/RD+k+Wjg5k6kR3dSBLDOZigXiZ1j10mMCTdXYwf3FG6/H+6ui8M0MUXsPjzUxX1kVU7LxJBHXBpCZWcKfel9DGTLW6V61nY+dcDAyCyzdnXk3g2QgWmOtFDebK7eg2YBrclOtc9+38GvPtLXPWMT0FSEE9/r/zw3eFKhmRans5iLVBkLkuklpfOXFO3bRPuaHn6erQ2ZKt4HnRchdO1lg5jGSFZkeMkOo6BNfan; NID_AUT=cmCTx6YMDrTJVjYhbULSCbJAwH3Qhk8yKEX8lShzLXZ/eIHGZ+BE3NQmANb0RfyAnY6fFfPEAdn8vJEsJy+IIoHIWi6OEMCL+nl5dq6qdQRgbADu9aGjiWshZA5L8TlX; JSESSIONID=817EC285EC80E4BA6E1E8ECB4782ED7A',
        'Host':'cafe.naver.com',
        'Proxy-Connection':'keep-alive',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36'
    };
}