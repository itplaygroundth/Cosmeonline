
 import {MenuItem} from 'primeng/primeng';



export const menus:MenuItem[]   =  [
            {
                label: 'ไฟล์',
                icon: 'fa-plus',
             
            },
            {
                label: 'จัดซื้อ',
                icon: 'fa-edit',
                // items: [
                //     {label: 'Undo', icon: 'fa-mail-forward'},
                //     {label: 'Redo', icon: 'fa-mail-reply'}
                // ]
            },
             {
                label: 'จัดขาย',
                icon: 'fa-edit',
                // items: [
                //     {label: 'Undo', icon: 'fa-mail-forward'},
                //     {label: 'Redo', icon: 'fa-mail-reply'}
                // ]
            },
             {
                label: 'เจ้าหนี้',
                icon: 'fa-edit',
                // items: [
                //     {label: 'Undo', icon: 'fa-mail-forward'},
                //     {label: 'Redo', icon: 'fa-mail-reply'}
                // ]
            }, {
                label: 'ลูกหนี้',
                icon: 'fa-edit',
                url: ['/customers']
                // items: [
                //     {label: 'Undo', icon: 'fa-mail-forward'},
                //     {label: 'Redo', icon: 'fa-mail-reply'}
                // ]
            },
            {
                label:'สินค้าคงคลัง',
                icon:'fa-item'
               
            },{
                label: 'รายงาน',
                icon: 'fa-edit',
                // items: [
                //     {label: 'Undo', icon: 'fa-mail-forward'},
                //     {label: 'Redo', icon: 'fa-mail-reply'}
                // ]
            }, {
                label: 'จัดการระบบ',
                icon: 'fa-edit',
                // items: [
                //     {label: 'Undo', icon: 'fa-mail-forward'},
                //     {label: 'Redo', icon: 'fa-mail-reply'}
                // ]
            },
        ];
 