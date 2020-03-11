import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { searchProducts } from '../api/api';
import { store } from '../index';
import { Link } from 'react-router-dom'
import Login from './login';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const fakeData = 
    [
        {
            "brand": "Mynte",
            "crawl_timestamp": "2016-03-20 14:44:44 +0000",
            "description": "specifications of mynte solid womens cycling shorts gym shorts swim shorts shorts details number of contents in sales package pack of 3 fabric polyamide nylon type cycling shorts gym shorts swim shorts general details pattern solid occasion casual sports party lounge wear beach wear ideal for womens in the box 3 shorts additional details other details photo may differ from actual item in terms of color due to the lighting during photo shooting or the monitors display style code cswiwcmb3shr10410396 fabric care wash like colours separately on low temparature use only nonchlorine bleach when needed do not dry clean do not iron",
            "discounted_price": "649.0",
            "image": "[\"http://img6a.flixcart.com/image/short/g/h/u/cswiw-cmb3-shr-104-103-96-mynte-l-original-imaeeg4kctcwegds.jpeg\", \"http://img5a.flixcart.com/image/short/x/h/b/cswiw-cmb5-shr-105-104-103-102-101-mynte-l-original-imaeebdgqdfjpgmv.jpeg\", \"http://img5a.flixcart.com/image/short/x/h/b/cswiw-cmb5-shr-105-104-103-102-101-mynte-l-original-imaeebdjgnhycshn.jpeg\", \"http://img5a.flixcart.com/image/short/b/g/f/cswiw-cmb4-shr-104-103-102-101-mynte-l-original-imaeebdggr9jvuj7.jpeg\", \"http://img6a.flixcart.com/image/short/b/h/p/cswiw-cmb4-shr-99-98-97-96-mynte-l-original-imaeebdghbhhfzdz.jpeg\"]",
            "is_FK_Advantage_product": "False",
            "overall_rating": "No rating available",
            "pid": "SRTEGWKKP9H88DQY",
            "prime_category": "clothing",
            "product_category_tree": "['Clothing ', \" Women's Clothing \", ' Sports & Gym Wear ', ' Shorts ', ' Mynte Shorts ', \" Mynte Solid Women's Cycling Shorts, Gym Shorts, ...\"]",
            "product_name": "mynte solid womens cycling shorts gym shorts swim shorts",
            "product_rating": "No rating available",
            "product_specifications": "{\"product_specification\"=>[{\"key\"=>\"Number of Contents in Sales Package\", \"value\"=>\"Pack of 3\"}, {\"key\"=>\"Fabric\", \"value\"=>\"Polyamide, Nylon\"}, {\"key\"=>\"Type\", \"value\"=>\"Cycling Shorts, Gym Shorts, Swim Shorts\"}, {\"key\"=>\"Pattern\", \"value\"=>\"Solid\"}, {\"key\"=>\"Occasion\", \"value\"=>\"Casual, Sports, Party, Lounge Wear, Beach Wear\"}, {\"key\"=>\"Ideal For\", \"value\"=>\"Women's\"}, {\"value\"=>\"3 Shorts\"}, {\"key\"=>\"Other Details\", \"value\"=>\"Photo May Differ From Actual Item in Terms of Color Due to the Lighting During Photo Shooting or the Monitor's Display\"}, {\"key\"=>\"Style Code\", \"value\"=>\"CSWIW-CMB3-SHR-104-103-96\"}, {\"value\"=>\"Wash Like Colours separately on low temparature, Use only non-chlorine bleach when needed, Do not dry clean, Do not iron\"}]}",
            "product_url": "http://www.flipkart.com/mynte-solid-women-s-cycling-shorts-gym-swim-shorts/p/itmegwkk77dhrmda?pid=SRTEGWKKP9H88DQY",
            "retail_price": "1499.0",
            "second_category": "women's clothing",
            "third_category": "shorts",
            "uniq_id": "181136677467016d6986b77f70d54558",
            "vectorizer_idx": 684
        },
        {
            "brand": "Mynte",
            "crawl_timestamp": "2016-03-20 14:44:44 +0000",
            "description": "specifications of mynte solid womens cycling shorts gym shorts swim shorts shorts details number of contents in sales package pack of 5 fabric polyamide nylon type cycling shorts gym shorts swim shorts general details pattern solid occasion casual sports party lounge wear beach wear ideal for womens in the box 5 shorts additional details other details photo may differ from actual item in terms of color due to the lighting during photo shooting or the monitors display style code cswiwcmb5shr105104103102101 fabric care wash like colours separately on low temparature use only nonchlorine bleach when needed do not dry clean do not iron",
            "discounted_price": "949.0",
            "image": "[\"http://img6a.flixcart.com/image/short/x/h/b/cswiw-cmb5-shr-105-104-103-102-101-mynte-l-original-imaeeg4kqpekfqce.jpeg\", \"http://img5a.flixcart.com/image/short/x/h/b/cswiw-cmb5-shr-105-104-103-102-101-mynte-l-original-imaeeg4kqpekfqce.jpeg\", \"http://img5a.flixcart.com/image/short/x/h/b/cswiw-cmb5-shr-105-104-103-102-101-mynte-l-original-imaeebdgqdfjpgmv.jpeg\", \"http://img5a.flixcart.com/image/short/x/h/b/cswiw-cmb5-shr-105-104-103-102-101-mynte-l-original-imaeebdjgnhycshn.jpeg\", \"http://img5a.flixcart.com/image/short/x/h/b/cswiw-cmb5-shr-105-104-103-102-101-mynte-l-original-imaeebdgbzrkzdyx.jpeg\", \"http://img5a.flixcart.com/image/short/g/u/3/cswiw-cmb5-shr-105-104-103-102-97-mynte-l-original-imaeebdjyz7mvb6g.jpeg\"]",
            "is_FK_Advantage_product": "False",
            "overall_rating": "No rating available",
            "pid": "SRTEGWKMPXHHN4MF",
            "prime_category": "clothing",
            "product_category_tree": "['Clothing ', \" Women's Clothing \", ' Sports & Gym Wear ', ' Shorts ', ' Mynte Shorts ', \" Mynte Solid Women's Cycling Shorts, Gym Shorts, ...\"]",
            "product_name": "mynte solid womens cycling shorts gym shorts swim shorts",
            "product_rating": "No rating available",
            "product_specifications": "{\"product_specification\"=>[{\"key\"=>\"Number of Contents in Sales Package\", \"value\"=>\"Pack of 5\"}, {\"key\"=>\"Fabric\", \"value\"=>\"Polyamide, Nylon\"}, {\"key\"=>\"Type\", \"value\"=>\"Cycling Shorts, Gym Shorts, Swim Shorts\"}, {\"key\"=>\"Pattern\", \"value\"=>\"Solid\"}, {\"key\"=>\"Occasion\", \"value\"=>\"Casual, Sports, Party, Lounge Wear, Beach Wear\"}, {\"key\"=>\"Ideal For\", \"value\"=>\"Women's\"}, {\"value\"=>\"5 Shorts\"}, {\"key\"=>\"Other Details\", \"value\"=>\"Photo May Differ From Actual Item in Terms of Color Due to the Lighting During Photo Shooting or the Monitor's Display\"}, {\"key\"=>\"Style Code\", \"value\"=>\"CSWIW-CMB5-SHR-105-104-103-102-101\"}, {\"value\"=>\"Wash Like Colours separately on low temparature, Use only non-chlorine bleach when needed, Do not dry clean, Do not iron\"}]}",
            "product_url": "http://www.flipkart.com/mynte-solid-women-s-cycling-shorts-gym-swim-shorts/p/itmegwkmq46h4ggz?pid=SRTEGWKMPXHHN4MF",
            "retail_price": "2495.0",
            "second_category": "women's clothing",
            "third_category": "shorts",
            "uniq_id": "c383c66d5d32e4f7f59a371fd8952132",
            "vectorizer_idx": 685
        },
        {
            "brand": "Mynte",
            "crawl_timestamp": "2016-03-20 14:44:44 +0000",
            "description": "key features of mynte solid womens cycling shorts gym shorts swim shorts great for running jogging gym working out mid rise waist machine washable comfortable material great for running jogging gym working outmynte solid womens cycling shorts gym shorts swim shorts price rs 849 mynte sports shorts allow for maximum movement thanks to the skin tight design and dry cell fabric which aims to to keep you comfortable and dry meaning you can workout for longer  specifications of mynte solid womens cycling shorts gym shorts swim shorts shorts details number of contents in sales package pack of 4 fabric polyamide nylon type cycling shorts gym shorts swim shorts general details pattern solid occasion casual sports party lounge wear beach wear ideal for womens in the box 4 shorts additional details other details photo may differ from actual item in terms of color due to the lighting during photo shooting or the monitors display style code cswiwcmb4shr10210110099 fabric care wash like colours separately on low temparature use only nonchlorine bleach when needed do not dry clean do not iron",
            "discounted_price": "849.0",
            "image": "[\"http://img5a.flixcart.com/image/short/r/t/2/cswiw-cmb4-shr-102-101-100-99-mynte-l-original-imaeeg4kujzhetnp.jpeg\", \"http://img5a.flixcart.com/image/short/b/g/f/cswiw-cmb4-shr-104-103-102-101-mynte-l-original-imaeebdg3y7rf88s.jpeg\", \"http://img6a.flixcart.com/image/short/h/p/q/cswiw-cmb5-shr-105-104-100-98-101-mynte-l-original-imaeebdjvfhdgnbp.jpeg\", \"http://img5a.flixcart.com/image/short/s/g/f/cswiw-cmb4-shr-105-104-103-102-mynte-l-original-imaeebdjpjrhzwxe.jpeg\", \"http://img5a.flixcart.com/image/short/r/t/2/cswiw-cmb4-shr-102-101-100-99-mynte-l-original-imaeebdg6crekzhh.jpeg\"]",
            "is_FK_Advantage_product": "False",
            "overall_rating": "No rating available",
            "pid": "SRTEGWKHYZ7FTDBG",
            "prime_category": "clothing",
            "product_category_tree": "['Clothing ', \" Women's Clothing \", ' Sports & Gym Wear ', ' Shorts ', ' Mynte Shorts ', \" Mynte Solid Women's Cycling Shorts, Gym Shorts, ...\"]",
            "product_name": "mynte solid womens cycling shorts gym shorts swim shorts",
            "product_rating": "No rating available",
            "product_specifications": "{\"product_specification\"=>[{\"key\"=>\"Number of Contents in Sales Package\", \"value\"=>\"Pack of 4\"}, {\"key\"=>\"Fabric\", \"value\"=>\"Polyamide, Nylon\"}, {\"key\"=>\"Type\", \"value\"=>\"Cycling Shorts, Gym Shorts, Swim Shorts\"}, {\"key\"=>\"Pattern\", \"value\"=>\"Solid\"}, {\"key\"=>\"Occasion\", \"value\"=>\"Casual, Sports, Party, Lounge Wear, Beach Wear\"}, {\"key\"=>\"Ideal For\", \"value\"=>\"Women's\"}, {\"value\"=>\"4 Shorts\"}, {\"key\"=>\"Other Details\", \"value\"=>\"Photo May Differ From Actual Item in Terms of Color Due to the Lighting During Photo Shooting or the Monitor's Display\"}, {\"key\"=>\"Style Code\", \"value\"=>\"CSWIW-CMB4-SHR-102-101-100-99\"}, {\"value\"=>\"Wash Like Colours separately on low temparature, Use only non-chlorine bleach when needed, Do not dry clean, Do not iron\"}]}",
            "product_url": "http://www.flipkart.com/mynte-solid-women-s-cycling-shorts-gym-swim-shorts/p/itmegwkh2xbtynh6?pid=SRTEGWKHYZ7FTDBG",
            "retail_price": "1995.0",
            "second_category": "women's clothing",
            "third_category": "shorts",
            "uniq_id": "fcea15b248fed0dabf7528cc5ce3519e",
            "vectorizer_idx": 686
        },
        {
            "brand": "Mynte",
            "crawl_timestamp": "2016-03-20 14:44:44 +0000",
            "description": "key features of mynte solid womens cycling shorts gym shorts swim shorts great for running jogging gym working out mid rise waist machine washable comfortable material great for running jogging gym working outmynte solid womens cycling shorts gym shorts swim shorts price rs 649 mynte sports shorts allow for maximum movement thanks to the skin tight design and dry cell fabric which aims to to keep you comfortable and dry meaning you can workout for longer  specifications of mynte solid womens cycling shorts gym shorts swim shorts shorts details number of contents in sales package pack of 3 fabric polyamide nylon type cycling shorts gym shorts swim shorts general details pattern solid ideal for womens occasion casual sports party lounge wear beach wear fabric care wash like colours separately on low temparature use only nonchlorine bleach when needed do not dry clean do not iron additional details other details photo may differ from actual item in terms of color due to the lighting during photo shooting or the monitors display style code cswiwcmb3shr10310296 in the box 3 shorts",
            "discounted_price": "649.0",
            "image": "[\"http://img6a.flixcart.com/image/short/4/j/m/cswiw-cmb3-shr-103-102-96-mynte-l-original-imaeeg4krcpv8kkv.jpeg\", \"http://img6a.flixcart.com/image/short/y/6/m/cswiw-cmb5-shr-105-104-103-102-96-mynte-l-original-imaeebdjt3arenhf.jpeg\", \"http://img6a.flixcart.com/image/short/f/r/z/cswiw-cmb5-shr-105-104-102-100-99-mynte-l-original-imaeebdjvynfn2td.jpeg\", \"http://img5a.flixcart.com/image/short/r/t/c/cswiw-cmb4-shr-103-102-101-100-mynte-l-original-imaeebdjcpucfetw.jpeg\", \"http://img6a.flixcart.com/image/short/b/h/p/cswiw-cmb4-shr-99-98-97-96-mynte-l-original-imaeebdghbhhfzdz.jpeg\"]",
            "is_FK_Advantage_product": "False",
            "overall_rating": "No rating available",
            "pid": "SRTEGWKKXGGSERKZ",
            "prime_category": "clothing",
            "product_category_tree": "['Clothing ', \" Women's Clothing \", ' Sports & Gym Wear ', ' Shorts ', ' Mynte Shorts ', \" Mynte Solid Women's Cycling Shorts, Gym Shorts, ...\"]",
            "product_name": "mynte solid womens cycling shorts gym shorts swim shorts",
            "product_rating": "No rating available",
            "product_specifications": "{\"product_specification\"=>[{\"key\"=>\"Number of Contents in Sales Package\", \"value\"=>\"Pack of 3\"}, {\"key\"=>\"Fabric\", \"value\"=>\"Polyamide, Nylon\"}, {\"key\"=>\"Type\", \"value\"=>\"Cycling Shorts, Gym Shorts, Swim Shorts\"}, {\"key\"=>\"Pattern\", \"value\"=>\"Solid\"}, {\"key\"=>\"Ideal For\", \"value\"=>\"Women's\"}, {\"key\"=>\"Occasion\", \"value\"=>\"Casual, Sports, Party, Lounge Wear, Beach Wear\"}, {\"value\"=>\"Wash Like Colours separately on low temparature, Use only non-chlorine bleach when needed, Do not dry clean, Do not iron\"}, {\"key\"=>\"Other Details\", \"value\"=>\"Photo May Differ From Actual Item in Terms of Color Due to the Lighting During Photo Shooting or the Monitor's Display\"}, {\"key\"=>\"Style Code\", \"value\"=>\"CSWIW-CMB3-SHR-103-102-96\"}, {\"value\"=>\"3 Shorts\"}]}",
            "product_url": "http://www.flipkart.com/mynte-solid-women-s-cycling-shorts-gym-swim-shorts/p/itmegwkkezprzyxu?pid=SRTEGWKKXGGSERKZ",
            "retail_price": "1499.0",
            "second_category": "women's clothing",
            "third_category": "shorts",
            "uniq_id": "27a57bd6c159a2cadf20d02e927c0c00",
            "vectorizer_idx": 687
        },
        {
            "brand": "Mynte",
            "crawl_timestamp": "2016-03-20 14:44:44 +0000",
            "description": "key features of mynte solid womens cycling shorts gym shorts swim shorts great for running jogging gym working out mid rise waist machine washable comfortable material great for running jogging gym working outmynte solid womens cycling shorts gym shorts swim shorts price rs 649 mynte sports shorts allow for maximum movement thanks to the skin tight design and dry cell fabric which aims to to keep you comfortable and dry meaning you can workout for longer  specifications of mynte solid womens cycling shorts gym shorts swim shorts shorts details number of contents in sales package pack of 3 fabric polyamide nylon type cycling shorts gym shorts swim shorts general details pattern solid occasion casual sports party lounge wear beach wear ideal for womens in the box 3 shorts additional details other details photo may differ from actual item in terms of color due to the lighting during photo shooting or the monitors display style code cswiwcmb3shr105104101 fabric care wash like colours separately on low temparature use only nonchlorine bleach when needed do not dry clean do not iron",
            "discounted_price": "649.0",
            "image": "[\"http://img6a.flixcart.com/image/short/p/v/t/cswiw-cmb3-shr-105-104-101-mynte-l-original-imaeeg4hg7avnn3a.jpeg\", \"http://img5a.flixcart.com/image/short/p/v/t/cswiw-cmb3-shr-105-104-101-mynte-l-original-imaeeg4hg7avnn3a.jpeg\", \"http://img6a.flixcart.com/image/short/r/u/g/cswiw-cmb4-shr-105-104-103-96-mynte-l-original-imaeebdg6xgevkzp.jpeg\", \"http://img6a.flixcart.com/image/short/y/6/m/cswiw-cmb5-shr-105-104-103-102-96-mynte-l-original-imaeebdgk5yxzhpc.jpeg\", \"http://img5a.flixcart.com/image/short/j/u/q/cswiw-cmb3-shr-105-104-103-mynte-l-original-imaeebdggumd8ghs.jpeg\", \"http://img5a.flixcart.com/image/short/b/g/f/cswiw-cmb4-shr-104-103-102-101-mynte-l-original-imaeebdg3y7rf88s.jpeg\"]",
            "is_FK_Advantage_product": "False",
            "overall_rating": "No rating available",
            "pid": "SRTEGWKKQABUMGFA",
            "prime_category": "clothing",
            "product_category_tree": "['Clothing ', \" Women's Clothing \", ' Sports & Gym Wear ', ' Shorts ', ' Mynte Shorts ', \" Mynte Solid Women's Cycling Shorts, Gym Shorts, ...\"]",
            "product_name": "mynte solid womens cycling shorts gym shorts swim shorts",
            "product_rating": "No rating available",
            "product_specifications": "{\"product_specification\"=>[{\"key\"=>\"Number of Contents in Sales Package\", \"value\"=>\"Pack of 3\"}, {\"key\"=>\"Fabric\", \"value\"=>\"Polyamide, Nylon\"}, {\"key\"=>\"Type\", \"value\"=>\"Cycling Shorts, Gym Shorts, Swim Shorts\"}, {\"key\"=>\"Pattern\", \"value\"=>\"Solid\"}, {\"key\"=>\"Occasion\", \"value\"=>\"Casual, Sports, Party, Lounge Wear, Beach Wear\"}, {\"key\"=>\"Ideal For\", \"value\"=>\"Women's\"}, {\"value\"=>\"3 Shorts\"}, {\"key\"=>\"Other Details\", \"value\"=>\"Photo May Differ From Actual Item in Terms of Color Due to the Lighting During Photo Shooting or the Monitor's Display\"}, {\"key\"=>\"Style Code\", \"value\"=>\"CSWIW-CMB3-SHR-105-104-101\"}, {\"value\"=>\"Wash Like Colours separately on low temparature, Use only non-chlorine bleach when needed, Do not dry clean, Do not iron\"}]}",
            "product_url": "http://www.flipkart.com/mynte-solid-women-s-cycling-shorts-gym-swim-shorts/p/itmegwkkhfygzww2?pid=SRTEGWKKQABUMGFA",
            "retail_price": "1499.0",
            "second_category": "women's clothing",
            "third_category": "shorts",
            "uniq_id": "2f71654dad4e4af61f0ca51eade6e9a2",
            "vectorizer_idx": 688
        },
        {
            "brand": "Mynte",
            "crawl_timestamp": "2016-03-20 14:44:44 +0000",
            "description": "key features of mynte solid womens cycling shorts gym shorts swim shorts great for running jogging gym working out mid rise waist machine washable comfortable material great for running jogging gym working outmynte solid womens cycling shorts gym shorts swim shorts price rs 849 mynte sports shorts allow for maximum movement thanks to the skin tight design and dry cell fabric which aims to to keep you comfortable and dry meaning you can workout for longer  specifications of mynte solid womens cycling shorts gym shorts swim shorts shorts details number of contents in sales package pack of 4 fabric polyamide nylon type cycling shorts gym shorts swim shorts general details pattern solid ideal for womens occasion casual sports party lounge wear beach wear fabric care wash like colours separately on low temparature use only nonchlorine bleach when needed do not dry clean do not iron additional details other details photo may differ from actual item in terms of color due to the lighting during photo shooting or the monitors display style code cswiwcmb4shr105104103100 in the box 4 shorts",
            "discounted_price": "849.0",
            "image": "[\"http://img5a.flixcart.com/image/short/h/y/p/cswiw-cmb4-shr-105-104-103-100-mynte-l-original-imaeeg4hfdpb2yzy.jpeg\", \"http://img6a.flixcart.com/image/short/r/u/g/cswiw-cmb4-shr-105-104-103-96-mynte-l-original-imaeebdg6xgevkzp.jpeg\", \"http://img6a.flixcart.com/image/short/y/6/m/cswiw-cmb5-shr-105-104-103-102-96-mynte-l-original-imaeebdgk5yxzhpc.jpeg\", \"http://img6a.flixcart.com/image/short/j/s/y/cswiw-cmb5-shr-105-104-103-102-100-mynte-l-original-imaeebdjymhtft4h.jpeg\", \"http://img6a.flixcart.com/image/short/y/6/m/cswiw-cmb5-shr-105-104-103-102-96-mynte-l-original-imaeebdjt3arenhf.jpeg\"]",
            "is_FK_Advantage_product": "False",
            "overall_rating": "No rating available",
            "pid": "SRTEGWKHGMNG3WRJ",
            "prime_category": "clothing",
            "product_category_tree": "['Clothing ', \" Women's Clothing \", ' Sports & Gym Wear ', ' Shorts ', ' Mynte Shorts ', \" Mynte Solid Women's Cycling Shorts, Gym Shorts, ...\"]",
            "product_name": "mynte solid womens cycling shorts gym shorts swim shorts",
            "product_rating": "No rating available",
            "product_specifications": "{\"product_specification\"=>[{\"key\"=>\"Number of Contents in Sales Package\", \"value\"=>\"Pack of 4\"}, {\"key\"=>\"Fabric\", \"value\"=>\"Polyamide, Nylon\"}, {\"key\"=>\"Type\", \"value\"=>\"Cycling Shorts, Gym Shorts, Swim Shorts\"}, {\"key\"=>\"Pattern\", \"value\"=>\"Solid\"}, {\"key\"=>\"Ideal For\", \"value\"=>\"Women's\"}, {\"key\"=>\"Occasion\", \"value\"=>\"Casual, Sports, Party, Lounge Wear, Beach Wear\"}, {\"value\"=>\"Wash Like Colours separately on low temparature, Use only non-chlorine bleach when needed, Do not dry clean, Do not iron\"}, {\"key\"=>\"Other Details\", \"value\"=>\"Photo May Differ From Actual Item in Terms of Color Due to the Lighting During Photo Shooting or the Monitor's Display\"}, {\"key\"=>\"Style Code\", \"value\"=>\"CSWIW-CMB4-SHR-105-104-103-100\"}, {\"value\"=>\"4 Shorts\"}]}",
            "product_url": "http://www.flipkart.com/mynte-solid-women-s-cycling-shorts-gym-swim-shorts/p/itmegwkhszsfkuzh?pid=SRTEGWKHGMNG3WRJ",
            "retail_price": "1995.0",
            "second_category": "women's clothing",
            "third_category": "shorts",
            "uniq_id": "a998a2aae5ae76f53c5a1d779f4826bf",
            "vectorizer_idx": 690
        },
        {
            "brand": "Mynte",
            "crawl_timestamp": "2016-03-20 14:44:44 +0000",
            "description": "key features of mynte solid womens cycling shorts gym shorts swim shorts great for running jogging gym working out mid rise waist machine washable comfortable material great for running jogging gym working outmynte solid womens cycling shorts gym shorts swim shorts price rs 649 mynte sports shorts allow for maximum movement thanks to the skin tight design and dry cell fabric which aims to to keep you comfortable and dry meaning you can workout for longer  specifications of mynte solid womens cycling shorts gym shorts swim shorts shorts details number of contents in sales package pack of 3 fabric polyamide nylon type cycling shorts gym shorts swim shorts general details pattern solid occasion casual sports party lounge wear beach wear ideal for womens in the box 3 shorts additional details other details photo may differ from actual item in terms of color due to the lighting during photo shooting or the monitors display style code cswiwcmb3shr999897 fabric care wash like colours separately on low temparature use only nonchlorine bleach when needed do not dry clean do not iron",
            "discounted_price": "649.0",
            "image": "[\"http://img6a.flixcart.com/image/short/q/k/7/cswiw-cmb3-shr-99-98-97-mynte-l-original-imaeeg4hheqbyhtg.jpeg\", \"http://img5a.flixcart.com/image/short/r/t/2/cswiw-cmb4-shr-102-101-100-99-mynte-l-original-imaeebdg6crekzhh.jpeg\", \"http://img5a.flixcart.com/image/short/f/r/z/cswiw-cmb5-shr-105-104-102-100-99-mynte-l-original-imaeebdgytfmgn2n.jpeg\", \"http://img6a.flixcart.com/image/short/m/a/r/cswiw-cmb5-shr-103-102-100-99-98-mynte-l-original-imaeebdgh62xgxfq.jpeg\", \"http://img5a.flixcart.com/image/short/5/k/k/cswiw-cmb4-shr-101-100-97-96-mynte-l-original-imaeebdgydayffne.jpeg\"]",
            "is_FK_Advantage_product": "False",
            "overall_rating": "No rating available",
            "pid": "SRTEGWKG97QKQTFZ",
            "prime_category": "clothing",
            "product_category_tree": "['Clothing ', \" Women's Clothing \", ' Sports & Gym Wear ', ' Shorts ', ' Mynte Shorts ', \" Mynte Solid Women's Cycling Shorts, Gym Shorts, ...\"]",
            "product_name": "mynte solid womens cycling shorts gym shorts swim shorts",
            "product_rating": "No rating available",
            "product_specifications": "{\"product_specification\"=>[{\"key\"=>\"Number of Contents in Sales Package\", \"value\"=>\"Pack of 3\"}, {\"key\"=>\"Fabric\", \"value\"=>\"Polyamide, Nylon\"}, {\"key\"=>\"Type\", \"value\"=>\"Cycling Shorts, Gym Shorts, Swim Shorts\"}, {\"key\"=>\"Pattern\", \"value\"=>\"Solid\"}, {\"key\"=>\"Occasion\", \"value\"=>\"Casual, Sports, Party, Lounge Wear, Beach Wear\"}, {\"key\"=>\"Ideal For\", \"value\"=>\"Women's\"}, {\"value\"=>\"3 Shorts\"}, {\"key\"=>\"Other Details\", \"value\"=>\"Photo May Differ From Actual Item in Terms of Color Due to the Lighting During Photo Shooting or the Monitor's Display\"}, {\"key\"=>\"Style Code\", \"value\"=>\"CSWIW-CMB3-SHR-99-98-97\"}, {\"value\"=>\"Wash Like Colours separately on low temparature, Use only non-chlorine bleach when needed, Do not dry clean, Do not iron\"}]}",
            "product_url": "http://www.flipkart.com/mynte-solid-women-s-cycling-shorts-gym-swim-shorts/p/itmegwkg3fekeshd?pid=SRTEGWKG97QKQTFZ",
            "retail_price": "1499.0",
            "second_category": "women's clothing",
            "third_category": "shorts",
            "uniq_id": "52953554641a00644fe1a553075e7084",
            "vectorizer_idx": 691
        },
        {
            "brand": "Mynte",
            "crawl_timestamp": "2016-03-20 14:44:44 +0000",
            "description": "key features of mynte solid womens cycling shorts gym shorts swim shorts great for running jogging gym working out mid rise waist machine washable comfortable material great for running jogging gym working outmynte solid womens cycling shorts gym shorts swim shorts price rs 649 mynte sports shorts allow for maximum movement thanks to the skin tight design and dry cell fabric which aims to to keep you comfortable and dry meaning you can workout for longer  specifications of mynte solid womens cycling shorts gym shorts swim shorts shorts details number of contents in sales package pack of 3 fabric polyamide nylon type cycling shorts gym shorts swim shorts general details pattern solid occasion casual sports party lounge wear beach wear ideal for womens in the box 3 shorts additional details other details photo may differ from actual item in terms of color due to the lighting during photo shooting or the monitors display style code cswiwcmb3shr1009996 fabric care wash like colours separately on low temparature use only nonchlorine bleach when needed do not dry clean do not iron",
            "discounted_price": "649.0",
            "image": "[\"http://img5a.flixcart.com/image/short/x/h/m/cswiw-cmb3-shr-100-99-96-mynte-l-original-imaeeg4khe5kfufn.jpeg\", \"http://img6a.flixcart.com/image/short/f/r/z/cswiw-cmb5-shr-105-104-102-100-99-mynte-l-original-imaeebdjyssfrvrb.jpeg\", \"http://img6a.flixcart.com/image/short/j/s/y/cswiw-cmb5-shr-105-104-103-102-100-mynte-l-original-imaeebdjymhtft4h.jpeg\", \"http://img6a.flixcart.com/image/short/s/y/j/cswiw-cmb5-shr-102-100-99-98-97-mynte-l-original-imaeebdgej6guyyb.jpeg\", \"http://img6a.flixcart.com/image/short/b/h/p/cswiw-cmb4-shr-99-98-97-96-mynte-l-original-imaeebdghbhhfzdz.jpeg\"]",
            "is_FK_Advantage_product": "False",
            "overall_rating": "No rating available",
            "pid": "SRTEGWKGYKXZWG2S",
            "prime_category": "clothing",
            "product_category_tree": "['Clothing ', \" Women's Clothing \", ' Sports & Gym Wear ', ' Shorts ', ' Mynte Shorts ', \" Mynte Solid Women's Cycling Shorts, Gym Shorts, ...\"]",
            "product_name": "mynte solid womens cycling shorts gym shorts swim shorts",
            "product_rating": "No rating available",
            "product_specifications": "{\"product_specification\"=>[{\"key\"=>\"Number of Contents in Sales Package\", \"value\"=>\"Pack of 3\"}, {\"key\"=>\"Fabric\", \"value\"=>\"Polyamide, Nylon\"}, {\"key\"=>\"Type\", \"value\"=>\"Cycling Shorts, Gym Shorts, Swim Shorts\"}, {\"key\"=>\"Pattern\", \"value\"=>\"Solid\"}, {\"key\"=>\"Occasion\", \"value\"=>\"Casual, Sports, Party, Lounge Wear, Beach Wear\"}, {\"key\"=>\"Ideal For\", \"value\"=>\"Women's\"}, {\"value\"=>\"3 Shorts\"}, {\"key\"=>\"Other Details\", \"value\"=>\"Photo May Differ From Actual Item in Terms of Color Due to the Lighting During Photo Shooting or the Monitor's Display\"}, {\"key\"=>\"Style Code\", \"value\"=>\"CSWIW-CMB3-SHR-100-99-96\"}, {\"value\"=>\"Wash Like Colours separately on low temparature, Use only non-chlorine bleach when needed, Do not dry clean, Do not iron\"}]}",
            "product_url": "http://www.flipkart.com/mynte-solid-women-s-cycling-shorts-gym-swim-shorts/p/itmegwkgsxbrngm5?pid=SRTEGWKGYKXZWG2S",
            "retail_price": "1499.0",
            "second_category": "women's clothing",
            "third_category": "shorts",
            "uniq_id": "4ff0ca9e76dba35524070475c41c800a",
            "vectorizer_idx": 692
        }
      ];
  function searchResult(event) {
    store.dispatch({ type: 'SEARCH_PRODUCT', payload: fakeData })
    if (event.key === 'Enter') {
      const data = {
        "uid": 2,
        "sstring": event.target.value
      };
      (
        async () => {
          let productsdata = await searchProducts(data)
          console.log('Products data', productsdata.data[0]);
          store.dispatch({ type: 'SEARCH_PRODUCT', payload: productsdata.data[0] })
        }
      )()
    };
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link to='' >
              <HomeIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ShopCart
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onKeyDown={(event) => searchResult(event)}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          {
            props.login ?
              <>
                <Button color="inherit" component={Link} to='/profile'>Profile</Button>
                <Button color="inherit"
                  onClick={
                    () => {
                      store.dispatch({ type: 'LOGIN_SUCCESS', payload: null })
                    }
                  }> Logout </Button>
              </>
              :
              <Login></Login>
          }
        </Toolbar>
      </AppBar>
    </div >
  );
}

export default Header;