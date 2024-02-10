export const emailVerificationTemplet = ( name : string, url:string ) => {

    return `
    <!DOCTYPE html>

    <html
    lang="en"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:v="urn:schemas-microsoft-com:vml"
    >
    <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link
        href="https://fonts.googleapis.com/css2?family=Permanent+Marker:wght@100;200;300;400;500;600;700;800;900"
        rel="stylesheet"
        type="text/css"
        />
        <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@100;200;300;400;500;600;700;800;900"
        rel="stylesheet"
        type="text/css"
        />
        <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@100;200;300;400;500;600;700;800;900"
        rel="stylesheet"
        type="text/css"
        />
        <link
        href="https://fonts.googleapis.com/css2?family=Cabin:wght@100;200;300;400;500;600;700;800;900"
        rel="stylesheet"
        type="text/css"
        />
        <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 0;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
        }

        #MessageViewBody a {
            color: inherit;
            text-decoration: none;
        }

        p {
            line-height: inherit;
        }

        .desktop_hide,
        .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
        }

        .image_block img + div {
            display: none;
        }

        @media (max-width: 620px) {
            .desktop_hide table.icons-inner {
            display: inline-block !important;
            }

            .icons-inner {
            text-align: center;
            }

            .icons-inner td {
            margin: 0 auto;
            }

            .mobile_hide {
            display: none;
            }

            .row-content {
            width: 100% !important;
            }

            .stack .column {
            width: 100%;
            display: block;
            }

            .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
            }

            .desktop_hide,
            .desktop_hide table {
            display: table !important;
            max-height: none !important;
            }

            .row-6 .column-1 .block-1.paragraph_block td.pad,
            .row-8 .column-1 .block-1.paragraph_block td.pad {
            padding: 10px 20px !important;
            }

            .row-7 .column-1 .block-1.button_block a,
            .row-7 .column-1 .block-1.button_block div,
            .row-7 .column-1 .block-1.button_block span {
            line-height: 38px !important;
            }

            .row-7 .column-1 .block-1.button_block .alignment a,
            .row-7 .column-1 .block-1.button_block .alignment div {
            width: 70% !important;
            }
        }
        </style>
    </head>
    <body
        style="
        background-color: #ffffff;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
        "
    >
        <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        class="nl-container"
        role="presentation"
        style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            background-color: #ffffff;
        "
        width="100%"
        >
        <tbody>
            <tr>
            <td>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-1"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
                >
                <tbody>
                    <tr>
                    <td>
                        <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 600px;
                            margin: 0 auto;
                        "
                        width="600"
                        >
                        <tbody>
                            <tr>
                            <td
                                class="column column-1"
                                style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                                "
                                width="100%"
                            >
                                <div
                                class="spacer_block block-1"
                                style="
                                    height: 60px;
                                    line-height: 60px;
                                    font-size: 1px;
                                "
                                >
                                 
                                </div>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                    </tr>
                </tbody>
                </table>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-3"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
                >
                <tbody>
                    <tr>
                    <td>
                        <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-radius: 0;
                            color: #000000;
                            width: 600px;
                            margin: 0 auto;
                        "
                        width="600"
                        >
                        <tbody>
                            <tr>
                            <td
                                class="column column-1"
                                style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                                "
                                width="100%"
                            >
                                <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                class="image_block block-1"
                                role="presentation"
                                style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                "
                                width="100%"
                                >
                                <tr>
                                    <td
                                    class="pad"
                                    style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                    "
                                    >
                                    <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                    >
                                        <div style="max-width: 120px">
                                        <img
                                            src="https://res.cloudinary.com/dkaj1swfy/image/upload/v1707212148/rzpzcawkt58iroxqrupq.png"
                                            style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 100%;
                                            "
                                            width="120"
                                        />
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                    </tr>
                </tbody>
                </table>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-4"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
                >
                <tbody>
                    <tr>
                    <td>
                        <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-radius: 0;
                            color: #000000;
                            width: 600px;
                            margin: 0 auto;
                        "
                        width="600"
                        >
                        <tbody>
                            <tr>
                            <td
                                class="column column-1"
                                style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                                "
                                width="100%"
                            >
                                <div
                                class="spacer_block block-1"
                                style="
                                    height: 25px;
                                    line-height: 25px;
                                    font-size: 1px;
                                "
                                >
                                 
                                </div>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                    </tr>
                </tbody>
                </table>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-5"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
                >
                <tbody>
                    <tr>
                    <td>
                        <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-radius: 0;
                            color: #000000;
                            width: 600px;
                            margin: 0 auto;
                        "
                        width="600"
                        >
                        <tbody>
                            <tr>
                            <td
                                class="column column-1"
                                style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                                "
                                width="100%"
                            >
                                <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="heading_block block-1"
                                role="presentation"
                                style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                "
                                width="100%"
                                >
                                <tr>
                                    <td class="pad">
                                    <h2
                                        style="
                                        margin: 0;
                                        color: #5a5a5a;
                                        direction: ltr;
                                        font-family: 'Source Sans Pro', Tahoma,
                                            Verdana, Segoe, sans-serif;
                                        font-size: 24px;
                                        font-weight: 700;
                                        letter-spacing: normal;
                                        line-height: 120%;
                                        text-align: center;
                                        margin-top: 0;
                                        margin-bottom: 0;
                                        mso-line-height-alt: 28.799999999999997px;
                                        "
                                    >
                                        <span class="tinyMce-placeholder"
                                        >Almost Set Up!</span
                                        >
                                    </h2>
                                    </td>
                                </tr>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                    </tr>
                </tbody>
                </table>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-6"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
                >
                <tbody>
                    <tr>
                    <td>
                        <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-radius: 0;
                            color: #000000;
                            width: 600px;
                            margin: 0 auto;
                        "
                        width="600"
                        >
                        <tbody>
                            <tr>
                            <td
                                class="column column-1"
                                style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                                "
                                width="100%"
                            >
                                <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                "
                                width="100%"
                                >
                                <tr>
                                    <td class="pad">
                                    <div
                                        style="
                                        color: #424242;
                                        direction: ltr;
                                        font-family: 'Ubuntu', Tahoma, Verdana,
                                            Segoe, sans-serif;
                                        font-size: 12px;
                                        font-weight: 400;
                                        letter-spacing: 0px;
                                        line-height: 120%;
                                        text-align: justify;
                                        mso-line-height-alt: 19.2px;
                                        "
                                    >
                                        <p style="margin: 0; margin-bottom: 16px">
                                        Hello ${name},
                                        </p>
                                        <p style="margin: 0">
                                        Hey, thanks for signing up! Setting up
                                        your account is almost done! Please
                                        confirm your email by clicking
                                        </p>
                                    </div>
                                    </td>
                                </tr>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                    </tr>
                </tbody>
                </table>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-7"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
                >
                <tbody>
                    <tr>
                    <td>
                        <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-radius: 0;
                            color: #000000;
                            width: 600px;
                            margin: 0 auto;
                        "
                        width="600"
                        >
                        <tbody>
                            <tr>
                            <td
                                class="column column-1"
                                style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                                "
                                width="100%"
                            >
                                <table
                                border="0"
                                cellpadding="20"
                                cellspacing="0"
                                class="button_block block-1"
                                role="presentation"
                                style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                "
                                width="100%"
                                >
                                <tr>
                                    <td class="pad">
                                    <div align="center" class="alignment">
                                        <a
                                        href="${url}"
                                        style="
                                            text-decoration: none;
                                            display: block;
                                            color: #ffffff;
                                            background-color: #212121;
                                            border-radius: 4px;
                                            width: 50%;
                                            border-top: 0px solid transparent;
                                            font-weight: 700;
                                            border-right: 0px solid transparent;
                                            border-bottom: 0px solid transparent;
                                            border-left: 0px solid transparent;
                                            padding-top: 5px;
                                            padding-bottom: 5px;
                                            font-family: 'Cabin', Arial,
                                            'Helvetica Neue', Helvetica,
                                            sans-serif;
                                            font-size: 16px;
                                            text-align: center;
                                            mso-border-alt: none;
                                            word-break: keep-all;
                                        "
                                        target="_blank"
                                        ><span
                                            style="
                                            padding-left: 20px;
                                            padding-right: 20px;
                                            font-size: 19px;
                                            display: inline-block;
                                            letter-spacing: normal;
                                            "
                                            ><span
                                            style="
                                                word-break: break-word;
                                                line-height: 38px;
                                            "
                                            >Confirm email</span
                                            ></span
                                        ></a
                                        >
                                    </div>
                                    </td>
                                </tr>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                    </tr>
                </tbody>
                </table>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-8"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
                >
                <tbody>
                    <tr>
                    <td>
                        <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-radius: 0;
                            color: #000000;
                            width: 600px;
                            margin: 0 auto;
                        "
                        width="600"
                        >
                        <tbody>
                            <tr>
                            <td
                                class="column column-1"
                                style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                                "
                                width="100%"
                            >
                                <table
                                border="0"
                                cellpadding="10"
                                cellspacing="0"
                                class="paragraph_block block-1"
                                role="presentation"
                                style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                "
                                width="100%"
                                >
                                <tr>
                                    <td class="pad">
                                    <div
                                        style="
                                        color: #424242;
                                        direction: ltr;
                                        font-family: 'Ubuntu', Tahoma, Verdana,
                                            Segoe, sans-serif;
                                        font-size: 12px;
                                        font-weight: 400;
                                        letter-spacing: 0px;
                                        line-height: 120%;
                                        text-align: justify;
                                        mso-line-height-alt: 19.2px;
                                        "
                                    >
                                        <p style="margin: 0">
                                        Just a heads-up, this confirmation link
                                        has a 10-minutes expiration. If those
                                        minutes slip away, you need to login
                                        again.
                                        </p>
                                    </div>
                                    </td>
                                </tr>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                    </tr>
                </tbody>
                </table>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row row-9"
                role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                width="100%"
                >
                <tbody>
                    <tr>
                    <td>
                        <table
                        align="center"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        class="row-content stack"
                        role="presentation"
                        style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-radius: 0;
                            color: #000000;
                            width: 600px;
                            margin: 0 auto;
                        "
                        width="600"
                        >
                        <tbody>
                            <tr>
                            <td
                                class="column column-1"
                                style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                font-weight: 400;
                                text-align: left;
                                padding-bottom: 5px;
                                padding-top: 5px;
                                vertical-align: top;
                                border-top: 0px;
                                border-right: 0px;
                                border-bottom: 0px;
                                border-left: 0px;
                                "
                                width="100%"
                            >
                                <div
                                class="spacer_block block-1"
                                style="
                                    height: 60px;
                                    line-height: 60px;
                                    font-size: 1px;
                                "
                                >
                                 
                                </div>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                    </tr>
                </tbody>
                </table>
            </td>
            </tr>
        </tbody>
        </table>
    </body>
    </html>
    `
}