import { useEffect } from 'react';
import { isClient } from "../utils/utils";


export const useHandleScroll = () => {

    if (isClient()) {
        const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      return bottom
    };

 };
