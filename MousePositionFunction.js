function GetMousePositionInElement(mouseEvent,element)
                {
                    var x = 0; // x position
                    var y = 0; // y position

                    /* This loop moves up the tree of offsetParents and adds the offsetTop and offsetLeft of each unitl offsetParent equals null. 
                       Eventually, regardless of the actual composition of the offsetParent tree,
                       this leads to the real coordinates of the element on the screen */

                     while(element.offsetParent != null){

                     x = element.offsetLeft + x;
                     y = element.offsetTop + y;

                      element=element.offsetParent;
                    }
                            /* gets the mouse position relative to the element by subtracting the position of the element (relative to the page) from 
                               the mouse position (relative to the page). */ 

                            x = mouseEvent.pageX - x; 
                            y = mouseEvent.pageY - y;

                    return { x: x, y: y}; //returns the muse position relative to the element
                }