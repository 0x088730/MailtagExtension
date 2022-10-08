import React, { useEffect } from 'react'
import Spinner from 'components/Spinner';
import { REFRESH_TOKEN } from "constract/utilis";
import useFetch from 'hooks/useFetch';
import CONFIG from 'config';
import useAxiosPrivate from "hooks/useAxiosPrivate";
import { SET_ACCESS_TOKEN } from 'redux/Auth/user.type';
import { SET_REFRESH_TOKEN } from 'redux/Auth/user.type';
import { useDispatch } from 'react-redux';

const GoogleSuccess = () => {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  const authCallback = async () => {
    try {
      const info = await axiosPrivate.get(CONFIG.authInfo)
      
      console.log('Info succes', info)
      window.opener && window.opener.handleAuthCallback({
        access: info.data.access,
        refresh: info.data.refresh,
      });
    } catch (error) {
      console.log("🚀 ~ file: index.js ~ line 14 ~ authCallback ~ error", error)
    } finally {
      window.opener && window.close()
    }
  }

  useEffect(() => {
    authCallback()
  }, [])

  return <Spinner />
}

export default GoogleSuccess;