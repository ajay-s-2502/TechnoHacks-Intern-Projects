const display = document.getElementById("display");

function appendVal(val)
{
    if(display.value.toString().length < 15)
    {
        if(val == '.')
        {
            if(display.value.toString().includes(".") == true)
            {

            }
            else
            {
                display.value += val;
            }
        }
        else if(val == '%' || val == '/' || val == '*')
        {
            if(display.value.toString().length > 0)
            {
                display.value += val;
            }
        }
        else
        {
            display.value += val;
        }
    }
}

function allClear()
{
    display.value = '';
}

function del()
{
    display.value = display.value.toString().slice(0,-1);
}

function equal()
{
    try
    {
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = 'Error!';
    }
}