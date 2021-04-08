const text = document.querySelector('.text')
const textArea = document.querySelector('.convert_textarea')
const convertButton = document.querySelector('.convert_button')
const copyButton = document.querySelector('.copy_button')
const clearButton = document.querySelector('.clear_button')
const textCount = document.querySelector('.text_count')

const convertTag = () => {
    let innerTextarea = textArea.value
    let a_text = innerTextarea.replace(/[\s.,%]/g, ' ');

    const a_new = a_text.split(' ')

    const uniqueSet = [...new Set(a_new)]
    let a_num = [];
    let i_num = 0;
    let i_space = 0
    let i_count = 0

    for (let i = 0; i < uniqueSet.length; i++) {
        i_num += uniqueSet[i].length
        i_space += 1
        if (i_num > (20 - i_space)) {
            a_num.push(',' + uniqueSet[i])
            i_num = uniqueSet[i].length;
            i_space = 0;
            i_count+=1;
            console.log('i', i)
        } else {
            a_num.push(uniqueSet[i])
        }
    }
    console.log('i_count', i_count)
    let regex = /\s+([.,!":])/g;
    text.innerHTML = a_num.join(' ').replace(regex, '$1')
    textCount.innerHTML = `${i_count + 1}`
}

function copyExec() {
    let tmp = document.createElement("textarea");
    document.body.appendChild(tmp);
    tmp.value = text.innerHTML;
    tmp.select()
    document.execCommand("copy");
    document.body.removeChild(tmp);
}
function clearField() {
    textArea.value = '';
}

convertButton.addEventListener('click', convertTag)
copyButton.addEventListener('click', copyExec)
clearButton.addEventListener('click', clearField)

