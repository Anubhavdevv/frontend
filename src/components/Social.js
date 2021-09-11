import React from 'react'

import { Link, HStack, VStack, Center } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import VisuallyHidden from '@chakra-ui/visually-hidden';


function header() {
    return (
        <div>
            <Heading m={[15, 95]}>Projects</Heading>
        </div>
    )
}

export default header
