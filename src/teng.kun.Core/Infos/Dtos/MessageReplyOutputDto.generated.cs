// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类：可遵守如下规则进行扩展：
//      1.横向扩展：如需添加额外的属性，可新建文件“MessageReplyOutputDto.cs”的分部类“public partial class MessageReplyOutputDto”}添加属性
// </auto-generated>
//
//  <copyright file="MessageReplyOutputDto.generated.cs" company="OSharp开源团队">
//      Copyright (c) 2014-2019 Liuliu. All rights reserved.
//  </copyright>
//  <site>https://www.osharp.org</site>
//  <last-editor>郭明锋</last-editor>
// -----------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

using OSharp.Entity;
using OSharp.Mapping;

using teng.kun.Infos.Entities;
using teng.kun.Identity.Dtos;

namespace teng.kun.Infos.Dtos
{
    /// <summary>
    /// 输入DTO：站内信回复信息
    /// </summary>
    [MapFrom(typeof(MessageReply))]
    [Description("站内信回复信息")]
    public partial class MessageReplyOutputDto : IOutputDto, IDataAuthEnabled
    {
        /// <summary>
        /// 初始化一个<see cref="MessageReplyOutputDto"/>类型的新实例
        /// </summary>
        public MessageReplyOutputDto()
        { }

        /// <summary>
        /// 初始化一个<see cref="MessageReplyOutputDto"/>类型的新实例
        /// </summary>
        public MessageReplyOutputDto(MessageReply entity)
        {
            Id = entity.Id;
            Content = entity.Content;
            IsRead = entity.IsRead;
            UserId = entity.UserId;
            BelongMessageId = entity.BelongMessageId;
            ParentMessageId = entity.ParentMessageId;
            ParentReplyId = entity.ParentReplyId;
            IsLocked = entity.IsLocked;
            CreatedTime = entity.CreatedTime;
        }

        /// <summary>
        /// 获取或设置 编号
        /// </summary>
        [DisplayName("编号")]
        public Guid Id { get; set; }

        /// <summary>
        /// 获取或设置 消息内容
        /// </summary>
        [DisplayName("消息内容")]
        public string Content { get; set; }

        /// <summary>
        /// 获取或设置 是否已读
        /// </summary>
        [DisplayName("是否已读")]
        public bool IsRead { get; set; }

        /// <summary>
        /// 获取或设置  消息回复人编号
        /// </summary>
        [DisplayName(" 消息回复人编号")]
        public int UserId { get; set; }

        /// <summary>
        /// 获取或设置 回复所属主消息，用于避免递归查询
        /// </summary>
        [DisplayName("回复所属主消息，用于避免递归查询")]
        public Guid BelongMessageId { get; set; }

        /// <summary>
        /// 获取或设置 回复的主消息，当回复主消息时有效
        /// </summary>
        [DisplayName("回复的主消息，当回复主消息时有效")]
        public Guid ParentMessageId { get; set; }

        /// <summary>
        /// 获取或设置 回复的回复消息，当回复回复消息时有效
        /// </summary>
        [DisplayName("回复的回复消息，当回复回复消息时有效")]
        public Guid ParentReplyId { get; set; }

        /// <summary>
        /// 获取或设置 是否锁定
        /// </summary>
        [DisplayName("是否锁定")]
        public bool IsLocked { get; set; }

        /// <summary>
        /// 获取或设置 创建时间
        /// </summary>
        [DisplayName("创建时间")]
        public DateTime CreatedTime { get; set; }

        /// <summary>
        /// 获取或设置 是否可更新的数据权限状态
        /// </summary>
        public bool Updatable { get; set; }

        /// <summary>
        /// 获取或设置 是否可删除的数据权限状态
        /// </summary>
        public bool Deletable { get; set; }

    }
}
