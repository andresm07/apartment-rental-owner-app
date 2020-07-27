import axios from 'axios';
import { apartments } from '../../assets/constants/apartments';
import { buildings } from '../../assets/constants/buildings';

export function getApartmentList() {
    const apartmentData = axios.get("https://localhost:3000/apartments")
        .then(response => response.data);
    return {
        type: "APARTMENT_LIST_GET", payload: apartments
    };
}

export function getBuildingList() {
    const buildingData = axios.get("https://localhost:3000/buildings")
        .then(response => response.data);
    return {
        type: "BUILDING_LIST_GET", payload: buildings
    };
}

export function getUsers() {
    const userData = axios.get("https://localhost:3000/adminUsers")
        .then(response => response.data);
    return {
        type: "ADMIN_USERS_GET", payload: []
    };
}