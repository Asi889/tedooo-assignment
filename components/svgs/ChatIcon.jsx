import React from 'react';

function ChatIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className='w-8 h-8'
            fill="none"
            viewBox="0 0 400 400"
        >
            <path
            className='chat-path'
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.9"
                strokeWidth="16"
                d="M197.737 285.624c92.777 0 146.586-37.532 161.427-112.596 13.417-66.765-40.29-93.51-117.668-103.975-77.378-10.465-177.894-5.283-198.924 72s56.953 111.418 73.958 115.875c17.004 4.456 7.364 77.926 15.87 77.926 8.505 0 31.279-44.514 41.355-49.23"
            ></path>
        </svg>
    );
}

export default ChatIcon;