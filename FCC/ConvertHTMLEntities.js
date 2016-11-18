const str = "Dolce & Gabana < Pizza";

function convertHTML(str) {
    return str.replace(/[&<>"']/g, (match) => {
        switch (match) {
            case '&':
                return '&amp;';
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case "'":
                return '&apos;';
        }
    });
};

console.log(convertHTML(str));
